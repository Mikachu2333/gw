# WPSAddInFunctions.UnRegister

删除加载项函数。只能在加载项中调用。

## 语法

express.UnRegister(Name)

express 一个代表 WPSAddInFunctions 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | String | 函数名。|


## 说明

删除加载项函数。
只有加载项可以删除函数。一个加载项只能删除当前加载项的函数。

## 返回值

**[WPSAddInFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WPSAddInFunction/obj)**  类型，代表新注册的函数。


