# WPSAddInFunction.Register

注册加载项函数。只能在加载项中调用。

## 语法

express.Register(Name, Func, IsAsync)

express   一个代表 WPSAddInFunctions 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 函数名。 |
| Func | 必选 | Function | JavaScript函数。 |
| IsAsync | 可选 | boolean | 保留参数，代表是否是异步参数。目前不可用 |

## 说明

注册加载项函数。
只有加载项可以注册函数。一个加载项只能注册当前加载项的函数。
目前无法注册异步函数。

对注册的函数有一定限制。具体限制请参考 [加载项函数注册和调用](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/jside-call-addin#类型系统)

## 返回值

**[WPSAddInFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WPSAddInFunction/obj)**  类型，代表新注册的函数。

## 示例

在加载项中注册一个函数，并允许js宏调用该函数：
```js
let func = Application.CurrentWPSAddIn.Functions.Register("functionName", (arg0, arg1)=>{
    return arg0 + arg1
})
func.AllowJsIdeCall = true;
```
