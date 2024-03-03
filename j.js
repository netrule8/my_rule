[rewrite_local]
  
# > 财新周刊☆解锁阅读权限（2023-08-02）@ddgksf2013
http?:\/\/app\.qikan\.cn\/artical\/detail url script-response-body https://github.com/netrule8/my_rule/raw/master/j.js


[mitm] 

hostname=app.qikan.cn

***********************************/





var body = $response.body.replace(/isBuy":0/g, 'isBuy":1')
$done({ body })
