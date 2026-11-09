# DropDown.Default

返回或设置一个 **Long** 类型值，该值代表默认的下拉型项目。可读写。



## 语法

express.**Default**

express   一个代表 **DropDown** 对象的变量。

## 类型

number（int4 精度）

## 说明


下拉型窗体域的第一项为 1，第二项为 2，以此类推。



## 示例


```JavaScript
/*本示例为“example.docx”中名为“DropDown1”的下拉型窗体域设置默认项。*/
function test() {
    Documents.Item("example.docx").FormFields.Item("DropDown1").DropDown.Default = 2
}
```


```JavaScript
/*本示例显示活动文档上第一个下拉型窗体域的默认项。*/
function test() {
    let dropDown = ActiveDocument.FormFields.Item(1).DropDown
    alert(dropDown.Default)
}
```
