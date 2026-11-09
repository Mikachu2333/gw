# Options.DisableFeaturesbyDefault

如果为 **True** ，则 WPS 将在所有文档中禁用 **[DisableFeaturesIntroducedAfterbyDefault](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/DisableFeaturesIntroducedAfterbyDefault)** 中指定的 WPS 版本之后引入的所有功能。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**DisableFeaturesbyDefault**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


 **DisableFeaturesByDefault** 属性设置应用程序的全局选项。如果您想要禁用之后引入只用于文档的新版本功能，可使用 **[DisableFeatures](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/DisableFeatures)** 属性。



## 示例


```JavaScript
/*本示例对所有文档禁用枚举值 wd70 对应版本之后引入的所有功能。*/
function test() {
    //Checks whether features are disabled
    if (Options.DisableFeaturesbyDefault) {
        //If they are, disables all features after WPS for Windows
        Options.DisableFeaturesIntroducedAfterbyDefault = wd70
    } else {
        //If not, turns on the disable features option and disables
        //all features introduced after WPS for Windows
        Options.DisableFeaturesbyDefault = true
        Options.DisableFeaturesIntroducedAfterbyDefault = wd70
    }
}
```


```JavaScript
/*本示例判断如果 WPS 在所有文档中禁用 DisableFeaturesIntroducedAfterbyDefault 中指定的 WPS 版本之后引入的所有功能，则通知用户。*/
function test() {
    if (Options.DisableFeaturesbyDefault) {
        alert("WPS 在所有文档中禁用 DisableFeaturesIntroducedAfterbyDefault 中指定的 WPS 版本之后引入的所有功能")
    }
}
```
