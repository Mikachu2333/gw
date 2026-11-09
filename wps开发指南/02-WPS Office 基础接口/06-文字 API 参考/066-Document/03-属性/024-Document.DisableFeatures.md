# Document.DisableFeatures

如果为 **True** ，则禁用 **[DisableFeaturesIntroducedAfter](#TODO)** 属性中指定的版本之后的所有功能。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**DisableFeatures**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


 **DisableFeatures** 属性只影响设置属性的文档。如果计划与使用 WPS 较早版本的用户共享文档，请使用该属性，这样就无需禁用其 WPS 版本不支持的文档功能。



## 示例


```JavaScript
/*本示例对当前文档禁用枚举值 wd70 对应版本之后添加的所有功能。全局默认设置保持不变。*/
function test() {
    //Checks whether features are disabled
    if (ActiveDocument.DisableFeatures) {
        //If they are, disables all features after WPS for Windows 95
        ActiveDocument.DisableFeaturesIntroducedAfter = wd70
    } else {
        //If not, turns on the disable features option and disables all features introduced after WPS for Windows 95
        ActiveDocument.DisableFeatures = true
        ActiveDocument.DisableFeaturesIntroducedAfter = wd70
    }
}
```


```JavaScript
/*本示例显示第一个文档是否禁用 DisableFeaturesIntroducedAfter 属性指定的版本之后引入的所有功能。*/
function test() {
    alert(Documents.Item(1).DisableFeatures)
}
```
