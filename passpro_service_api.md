路由：/ios/member/profile/:member_id  <br/>
类型：get  <br/>
功能：根据会员ID获取会员信息  <br/>
返回：<br/>
失败
```json
{"code":"InvalidArgument","message":"member not found"}
```
成功
```json
{
               "memberId":110,
               "merchantId":1,
              "petName":"å¼å¤©","point":10000,
              "pushState":"receive",
              "createdAt":"2013-02-27T04:35:29.940Z",
              "privacy":"notShare",
              "state":"disable"
          }
```

路由：/ios/member/bills/:member_id
路由：/ios/gifts/:merchant_id
路由：/ios/activities/:merchant_id
路由：/ios/gift/infor/:gift_id
post
路由：/ios/exchange/gifts
