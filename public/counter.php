<?php
// Increments (POST) or reads (GET) the assessment-completion counter.
// Not linked from the site; the results flow calls this once per completed
// assessment. Storage lives in assessment-data/, which the deploy workflow
// excludes from sync so redeploys never overwrite the count.

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://www.sima360.org');

$dataDir = __DIR__ . '/assessment-data';
$dataFile = $dataDir . '/count.txt';

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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $count++;
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, (string) $count);
    fflush($fp);
}

flock($fp, LOCK_UN);
fclose($fp);

echo json_encode(['count' => $count]);
