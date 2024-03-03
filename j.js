[rewrite_local]
http\?:\/\/app\.qikan\.cn\/artical\/detail url script-response-body https://github.com/netrule8/my_rule/raw/main/j.js


[mitm] 

hostname=app.qikan.cn





var body = $response.body.replace(/isBuy":0/g, 'isBuy":1')
$done({ body })
