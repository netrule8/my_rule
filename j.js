var body = $response.body.replace(/isBuy":0/g, 'isBuy":1')
$done({ body })
