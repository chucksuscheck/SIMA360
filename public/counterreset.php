<?php
// Resets the assessment-completion counter to 0. Requires a ?token= query
// param matching assessment-data/reset-token.txt, a file that lives only on
// the server (never committed to git, never overwritten by deploys — see
// the assessment-data/ exclude in .github/workflows/deploy.yml). Create
// that file yourself via FTP/cPanel with a secret of your choosing before
// this endpoint will do anything.

header('Content-Type: application/json');

$dataDir = __DIR__ . '/assessment-data';
$dataFile = $dataDir . '/count.txt';
$tokenFile = $dataDir . '/reset-token.txt';

if (!is_file($tokenFile)) {
    http_response_code(403);
    echo json_encode(['error' => 'reset token not configured']);
    exit;
}

$expected = trim(file_get_contents($tokenFile));
$provided = isset($_GET['token']) ? trim($_GET['token']) : '';

if ($expected === '' || !hash_equals($expected, $provided)) {
    http_response_code(403);
    echo json_encode(['error' => 'invalid token']);
    exit;
}

if (!is_dir($dataDir)) {
    mkdir($dataDir, 0755, true);
}

$fp = fopen($dataFile, 'c+');
if (!$fp) {
    http_response_code(500);
    echo json_encode(['error' => 'storage unavailable']);
    exit;
}

flock($fp, LOCK_EX);
ftruncate($fp, 0);
rewind($fp);
fwrite($fp, '0');
fflush($fp);
flock($fp, LOCK_UN);
fclose($fp);

echo json_encode(['count' => 0]);
