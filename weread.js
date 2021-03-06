var body = $response.body;
const path1 = "/pay/memberCardSummary";
var path = $request.path;
function modify_card() {
  let obj = JSON.parse(body);
  let day = 600*86400
  obj["expiredTime"] = obj["expiredTime"]+day;
  obj["expired"] = 0;
  obj["remainTime"] = obj["remainTime"]+day;
  console.log('增加时长成功.增加了600天')
  body = JSON.stringify(obj);
}

   
if (path.indexOf(path1) != -1){
  modify_card();
}

$done(body);
