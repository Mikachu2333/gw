# AddinFunction.IsAsync

该函数是否为异步函数。

## 语法

express.**IsAsync**

express   一个代表 **AddinFunction** 对象的变量。

## 类型

boolean，只读。

## 说明

在 [AddinFunctions.Register](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/AddinFunctions/member/Register) 时由 `isAsync` 参数决定。异步函数的 `Call` 返回 Promise。
