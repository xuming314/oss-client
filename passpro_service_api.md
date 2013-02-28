<h2>1</h2>
路由：/ios/member/profile/:member_id  <br/>
类型：get  <br/>
功能：根据会员ID获取会员信息  <br/>
返回：<br/>
失败
```json
{
  "code":"InvalidArgument",
  "message":"profile not found"
}
```
成功
```json
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
路由：/ios/member/bills/:member_id  <br/>
类型：get  <br/>
功能：根据会员ID获取会员消费记录  <br/>
返回：  <br/>
失败
```json
{
  "code":"InvalidArgument",
  "message":"bills not found"
}
```
成功（返回json数组）
```json
[{
  "memberId"   : Number,
  "billCode"   : Number,
  "paidType"   : String, //['money', 'points'],
  "posCode"    : String,
  "paidPoints" : Number,
  "paidMoney"  : Number,
  "merchant"   : String,
  "createTime" : Date
}]
```
<h2>3</h2>
路由：/ios/gifts/:merchant_id  <br/>
类型：get  <br/>
功能：根据商户ID获取商户礼品列表  <br/>
返回：  <br/>
失败
```json
{
  "code":"InvalidArgument",
  "message":"gifts not found"
}
```
成功（返回json数组）
```json
[{
  "merchantId"  : Number,
  "giftId"      : Number,
  "category"    : String,
  "titleCn"     : String,
  "titleEn"     : String,
  "description" : String,
  "points"      : Number,
  "remain"      : Number,
  "frontImage"  : String,
  "backImage"   : String
}]
```
<h2>4</h2>
路由：/ios/merchant/activities/:merchant_id  <br/>
类型：get  <br/>
功能：根据商户ID获取商户的活动列表  <br/>
返回：  <br/>
失败
```json
{
  "code":"InvalidArgument",
  "message":"activities not found"
}
```
成功（返回json数组）
```json
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
路由：/ios/exchange/gifts  <br/>
类型：post  <br/>
功能：礼品兑换  <br/>
请求：  <br/>
```json
{
  "merchant_id": 1,
  "member_id": 111,
  "gifts": [{
    "gift_id": Number,
    "count": Number
  }, {
    "gift_id": Number,
    "count": Number
  }, {
    "gift_id": Number,
    "count": Number
  }]
}
```
返回：  <br/>
失败
```json
```
成功
```json

```
