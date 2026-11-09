# Shape.AlternativeText

返回或设置与网页的图形相关联的可选文字（可选文字：由 Web 浏览器用于在图像下载过程中显示文本，其对象是那些关闭图形的用户，以及那些依赖屏幕阅读软件将屏幕上的图形转换为可读语言的用户。）。 **String** 类型，可读写。



## 语法

express.**AlternativeText**

express   一个代表 **Shape** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档第一个形状相关联的可选文字。*/
function test() {
    alert(ActiveDocument.Shapes.Item(1).AlternativeText)
}
```


```JavaScript
/*本示例在第一个文档中添加一个矩形，并将相关联的可选文字设置为对该形状的说明。*/
function test() {
    let shape = Documents.Item(1).Shapes.AddShape(msoShapeRectangle, 300, 300, 100, 150)
    shape.AlternativeText = "这是一个矩形"
}
```
