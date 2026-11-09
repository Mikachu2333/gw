# ShapeRange.AlternativeText

返回或设置与网页的图形相关联的可选文字。 **String** 类型，可读写。



## 语法

express.**AlternativeText**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例为活动窗口中选定的图形设定可选文字。选定图形是一个矩形。*/
function test() {
    ActiveWindow.Selection.ShapeRange.AlternativeText = "This is a rectangle."
}
```


```JavaScript
/*本示例显示活动文档中第一个图形的可选文字。*/
function test() {
    alert(ActiveDocument.Shapes.Range(1).AlternativeText)
}
```
