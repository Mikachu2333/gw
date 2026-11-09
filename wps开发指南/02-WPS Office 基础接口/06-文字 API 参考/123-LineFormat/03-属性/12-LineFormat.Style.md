# LineFormat.Style

返回或设置线条格式样式。可读写 **MsoLineStyle** 类型。



## 语法

express.**Style**

express   一个代表 **LineFormat** 对象的变量。

## 类型

MsoLineStyle

## 示例


```JavaScript
/*本示例设置活动文档的第一个（线条）形状的线条格式样式。*/
function test() {
    let lineFormat = ActiveDocument.Shapes.Item(1).Line
    lineFormat.Style = msoLineThinThin
}
```


```JavaScript
/*本示例显示所选（线条）形状的线条格式样式是否为msoLineSingle。*/
function test() {
    let lineFormat = Selection.ShapeRange.Line
    alert(lineFormat.Style == msoLineSingle)
}
```
