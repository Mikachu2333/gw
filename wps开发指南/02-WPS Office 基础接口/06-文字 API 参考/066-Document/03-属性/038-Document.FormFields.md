# Document.FormFields

返回一个 **[FormFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormFields/obj)** 集合，该集合代表文档中的所有窗体域。只读。



## 语法

express.**FormFields**

express   一个代表 **Document** 对象的变量。

## 类型

FormFields

## 示例


```JavaScript
/*本示例将活动文档上名为“Text1”的窗体域的内容设置为“Name”。*/
function test() {
    ActiveDocument.FormFields.Item("Text1").Result = "Name"
}
```


```JavaScript
/*本示例显示活动文档上名为“DropDown3”的下拉型窗体域中所选项的名称。*/
function test() {
    let dropDown = ActiveDocument.FormFields.Item("DropDown3").DropDown
    alert(dropDown.ListEntries.Item(dropDown.Value).Name)
}
```
