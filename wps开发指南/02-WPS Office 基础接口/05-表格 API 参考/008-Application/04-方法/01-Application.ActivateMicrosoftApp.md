# Application.ActivateMicrosoftApp

激活一个 Kingsoft 应用程序。如果该应用程序已经处于运行状态，则本方法激活的是正在运行的应用程序。如果该应用程序不处于运行状态，则本方法将启动该应用程序的新实例。



## 语法

express.**ActivateMicrosoftApp(Index)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | XlMSApplication | **[XlMSApplication](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlMSApplication)** 指定要激活的 Kingsoft 应用程序。 |

## 返回值

void

## 示例


```JavaScript
/*本示例启动并激活 WPS文字。*/
function test() {
    Application.ActivateMicrosoftApp(xlMicrosoftWord)
}
```


```JavaScript
/*本示例启动并激活 WPS演示。*/
function test() {
    Application.ActivateMicrosoftApp(xlMicrosoftPowerPoint)
}
```
