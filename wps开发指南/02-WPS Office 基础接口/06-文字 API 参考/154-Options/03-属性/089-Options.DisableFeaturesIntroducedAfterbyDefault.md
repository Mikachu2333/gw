# Options.DisableFeaturesIntroducedAfterbyDefault

对所有文档禁用指定版本后引入的所有功能。 **WdDisableFeaturesIntroducedAfter** 类型，可读写。



## 语法

express.**DisableFeaturesIntroducedAfterbyDefault**

express   一个代表 **Options** 对象的变量。

## 类型

WdDisableFeaturesIntroducedAfter

## 说明


在设置 **DisableFeaturesIndroduceSfterByDefault** 属性之前，必须将 **DisableFeaturesByDefault** 属性设置为 **True** 。否则该设置不会生效，并且将保持默认设置。

 **DisableFeaturesIntroducedAfterByDefault** 属性设置应用程序的全局选项并影响所有文档。如果仅对某文档禁用指定版本后引入的所有功能，可使用 **DisableFeaturesIntroducedAfter** 属性。



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
/*本示例显示是否对所有文档禁用枚举值 wd80 对应版本之后引入的所有功能。*/
function test() {
    alert(Options.DisableFeaturesIntroducedAfterbyDefault == wd80)
}
```
