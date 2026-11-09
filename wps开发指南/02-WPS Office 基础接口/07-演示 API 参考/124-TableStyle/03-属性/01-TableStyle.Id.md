# TableStyle.Id

返回一个标识表格样式的字符串。只读。



## 语法

express.**Id**

express   一个代表 **TableStyle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一个表格的表格样式的 Id。*/
function test() {
    let table = ActivePresentation.Slides.Item(1).Shapes.Item(1).Table
    let tableStyle = table.Style
    alert(tableStyle.Id)
}
```


```JavaScript
/*本示例显示活动窗口所选表格的表格样式的 Id。*/
function test() {
    let table = ActiveWindow.Selection.ShapeRange.Table
    let tableStyle = table.Style
    alert(tableStyle.Id)
}
```
