# Range.FormFields

返回一个 **[FormFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormFields/obj)** 集合，该集合代表区域中的所有窗体域。只读。



## 语法

express.**FormFields**

express   一个代表 **Range** 对象的变量。

## 类型

FormFields

## 示例


```JavaScript
/*本示例检索活动文档第一节的第一个窗体域的类型。*/
function test() {
    let type = ActiveDocument.Sections.Item(1).Range.FormFields.Item(1).Type
    let thetype = ""
    switch (type) {
        case wdFieldFormTextInput:
            thetype = "TextBox"
            break
        case wdFieldFormDropDown:
            thetype = "DropDown"
            break
        case wdFieldFormCheckBox:
            thetype = "CheckBox"
            break
    }
}
```


```JavaScript
/*本示例显示是否将底纹应用于所选内容中的窗体域。*/
function test() {
    alert(Selection.Range.FormFields.Shaded)
}
```
