# ShapeRange.TextFrame

返回一个 **TextFrame** 对象，该对象包含指定形状范围的文字。



## 语法

express.**TextFrame**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

TextFrame

## 示例


```JavaScript
/*本示例设置活动文档上第一个和第二个形状中的文本框左边缘与包含文本框的形状的内切矩形左边缘之间的距离。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 2])
    shapeRange.TextFrame.MarginLeft = 30
}
```


```JavaScript
/*本示例显示选中的形状是否包含文字。*/
function test() {
    alert(Selection.ShapeRange.TextFrame.HasText === msoTrue)
}
```
