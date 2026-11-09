# WPSAddInFunctions.Item

获取指定索引或名称的函数 **[WPSAddInFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WPSAddInFunction/obj)** 对象。

## 语法

express.Item(Index)

express   一个代表 WPSAddInFunctions  对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | string/number | 函数的索引（从1开始）或名称。 |


## 说明

获取指定索引或名称的函数 **[WPSAddInFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WPSAddInFunction/obj)** 对象。

## 返回值

如果找到函数，返回 **[WPSAddInFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WPSAddInFunction/obj)** 对象, 如果未找到对应的函数，则返回 null。

