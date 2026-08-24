<?php
// Increments (POST, unauthenticated — called by every visitor who finishes
// the assessment) or reads (GET, token-gated) the assessment-completion
// counter. count.txt lives only on the server (deploy workflow excludes it
// from sync); token.txt is written fresh on every deploy from the
// COUNTER_TOKEN GitHub secret.

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://www.sima360.org');

$dataDir = __DIR__ . '/assessment-data';
$dataFile = $dataDir . '/count.txt';
$tokenFile = $dataDir . '/token.txt';

$isPost = $_SERVER['REQUEST_METHOD'] === 'POST';

if (!$isPost) {
    $expected = is_file($tokenFile) ? trim(file_get_contents($tokenFile)) : '';
    $provided = isset($_GET['token']) ? trim($_GET['token']) : '';
    if ($expected === '' || !hash_equals($expected, $provided)) {
        http_response_code(403);
        echo json_encode(['error' => 'invalid token']);
        exit;
    }
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
$count = (int) fread($fp, 1024);

if ($isPost) {
    $count++;
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, (string) $count);
    fflush($fp);
}

flock($fp, LOCK_UN);
fclose($fp);

echo json_encode(['count' => $count]);
