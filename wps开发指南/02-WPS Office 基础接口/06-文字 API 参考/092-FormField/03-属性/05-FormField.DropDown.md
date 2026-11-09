# FormField.DropDown

返回一个 **DropDown** 对象，该对象代表下拉型窗体域。只读。



## 语法

express.**DropDown**

express   一个代表 **FormField** 对象的变量。

## 类型

DropDown

## 说明


如果将 **DropDown** 属性应用于非下拉型窗体域的 **FormField** 对象，则该属性有效，但是返回的对象的 **Valid** 属性将为 **False** 。



## 示例


```JavaScript
/*本示例显示活动文档上名为“DropDown4”的下拉型窗体域中所选项的文本。*/
function test() {
    let dropDown = ActiveDocument.FormFields.Item("DropDown4").DropDown
    alert(dropDown.ListEntries.Item(dropDown.Value).Name)
}
```


```JavaScript
/*本示例向第一个文档中名为“DropDown4”的下拉型窗体域中添加名为“Seattle”的项。*/
function test() {
    let listEntries = Documents.Item(1).FormFields.Item("DropDown4").DropDown.ListEntries
    listEntries.Add("Seattle")
}
```
