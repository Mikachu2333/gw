# WPSAddInFunction.Call

调用函数

## 语法

express.Call(Arg1, Arg2, ...)

express   一个代表 WPSAddInFunction 对象的变量。

## 说明

调用函数。
对类型有一定限制。具体限制请参考 [加载项函数注册和调用](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/jside-call-addin#类型系统)

## 返回值

any/Variant，类型根据具体函数而定。

## 示例

在js宏中调用加载项注册的函数：
```js
function test () {
    const addin = Application.WPSAddIns.Item("addinName")
    const func = addin.Functions.Item("functionName")

    let arg0 = 1;
    let arg1 = 2;
    let result = func.Call(arg0, arg1);
}
```
