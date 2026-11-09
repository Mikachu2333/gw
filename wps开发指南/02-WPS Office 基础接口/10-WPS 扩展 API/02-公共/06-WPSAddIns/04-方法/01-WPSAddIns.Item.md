# WPSAddIns.Item

获取指定索引或名称的加载项 **[WPSAddIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WPSAddIn/obj)** 对象。

## 语法

express.Item(index)

express   一个代表 WPSAddIns  对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | string/number | 函数的索引（从1开始）或名称。 |


## 说明

获取指定索引或名称的加载项 **[WPSAddIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WPSAddIn/obj)** 对象。

## 返回值

如果找到加载项，返回 **[WPSAddIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WPSAddIn/obj)** 对象, 如果未找到对应的加载项，则返回 null。

