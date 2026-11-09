# FormField.Type

返回域的类型。只读 **[WdFieldType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdFieldType)** 类型。



## 语法

express.**Type**

express   一个代表 **FormField** 对象的变量。

## 类型

WdFieldType

## 示例


```JavaScript
/*本示例显示活动文档上第一个窗体域的类型是否为wdFieldFormCheckBox。*/
function test() {
    alert(ActiveDocument.FormFields.Item(1).Type == wdFieldFormCheckBox)
}
```


```JavaScript
/*本示例判断所选内容中第一个窗体域是否为下拉型窗体域，并通知用户。*/
function test() {
    let formField = Selection.FormFields.Item(1)
    if (formField.Type == wdFieldFormDropDown) {
        alert("窗体域为下拉型窗体域")
    } else {
        alert("窗体域不为下拉型窗体域")
    }
}
```
