<h2>1</h2>
路由：/api/v1/ios/member/profile/:member_id  <br/>
类型：get  <br/>
功能：根据会员ID获取会员信息  <br/>
返回：<br/>
success: 200; not authorized: 401; argument invalid: 409  <br/>
失败
```js
{
  "code":"InvalidArgument",
  "message":"profile not found"
}
```
成功
```js
{
  "memberId"     : Number,
  "userId"       : Number,
  "merchantId"   : Number,
  "roleId"       : Number,
  "petName"      : String,
  "state"        : String,// ['disable', 'enable', 'suspend']
  "privacy"      : String,// ['notShare', 'baseShare', 'fullShare']
  "createdAt"    : Date,
  "dueTime"      : Date,
  "point"        : Number,
  "savings"      : Number,
  "savingDueTime": Date,
  "pushState"    : String,// ['receive', 'reject']
}
```
<h2>2</h2>
路由：/api/v1/ios/member/bills/:member_id  <br/>
类型：get  <br/>
功能：根据会员ID获取会员消费记录  <br/>
返回：  <br/>
success: 200; not authorized: 401; argument invalid: 409  <br/>
失败
```js
{
  "code":"InvalidArgument",
  "message":"bills not found"
}
```
成功（返回json数组）
```js
[{
  "memberId"   : Number,
  "merchantId" : Number,
  "billCode"   : Number,
  "paidType"   : String, //['money', 'points'],
  "posCode"    : String,
  "paidPoints" : Number,
  "paidMoney"  : Number,
  "createTime" : Date
}]
```
<h2>3</h2>
路由：/api/v1/ios/merchant/gifts/:merchant_id  <br/>
类型：get  <br/>
功能：根据商户ID获取商户礼品列表  <br/>
返回：  <br/>
success: 200; not authorized: 401; argument invalid: 409  <br/>
失败
```js
{
  "code":"InvalidArgument",
  "message":"gifts not found"
}
```
成功（返回json数组）
```js
[{
  "merchantId"  : Number,
  "giftId"      : Number,
  "category"    : String,
  "titleCn"     : String,
  "titleEn"     : String,
  "description" : String,
  "points"      : Number,
  "remain"      : Number,
  "images"      : String  //各个路径以","分隔，例："/ios/upload/a.jpg,/ios/upload/b.png"
}]
```
<h2>4</h2>
路由：/api/v1/ios/merchant/activities/:merchant_id  <br/>
类型：get  <br/>
功能：根据商户ID获取商户的活动列表  <br/>
返回：  <br/>
success: 200; not authorized: 401; argument invalid: 409  <br/>
失败
```js
{
  "code":"InvalidArgument",
  "message":"activities not found"
}
```
成功（返回json数组）
```js
[{
  merchantId  : Number,
  title       : String,
  content     : String,
  imgPath     : String,
  audioPath   : String,
  state       : String, //['valid', 'invalid']
  activityType: String, //['优惠券', '团购券']
  auditState  : String, //['通过', '否决', '审核中']
  applyState  : String, //['无限制', '需申领']
  wholeState  : String, //['全部门店', '部分门店']
  startTime   : Date,
  endTime     : Date,
  createTime  : Date,
  updateTime  : Date
}]
```
<h2>5</h2>
路由：/api/v1/ios/exchange/gifts  <br/>
类型：post  <br/>
功能：礼品兑换  <br/>
请求：  <br/>
```js
{
  "merchantId": Number,
  "memberId": Number,
  "gifts": [{
    "giftId": Number,
    "count": Number
  }, {
    "giftId": Number,
    "count": Number
  }, {
    "giftId": Number,
    "count": Number
  }]
}
```
返回：  <br/>
success: 200; not authorized: 401; argument invalid: 409  <br/>
失败
```js
{
  "code":"InvalidArgument",
  "message":""
}
//主要报错信息
'gift not found'    //礼品不存在
'gift not enough'   //礼品数量不足
'gift count is wrong'  //客户端请求的礼品数量不正确，如：负数
'member points not enough'    //会员积分点数不够
```
成功
```js
{
  "code": "success",
  "message": "exchange finish"
}
```
