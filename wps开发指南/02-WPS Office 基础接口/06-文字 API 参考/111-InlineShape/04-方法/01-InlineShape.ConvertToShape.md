# InlineShape.ConvertToShape

将嵌入式图形转换为可自由浮动的图形。返回一个 **Shape** 对象，该对象代表新图形。



## 语法

express.**ConvertToShape()**

express   一个代表 **InlineShape** 对象的变量。

## 返回值

Shape

## 示例


```JavaScript
/*本示例将活动文档的第一个嵌入式图形转换为浮动的图形。*/
function test() {
    ActiveDocument.InlineShapes.Item(1).ConvertToShape()
}
```


```JavaScript
/*本示例将选中的第二个嵌入式图形转换为浮动的图形，并显示转换后的图形的类型是否为msoPicture。*/
function test() {
    let shape = Selection.InlineShapes.Item(2).ConvertToShape()
    alert(shape.Type == msoPicture)
}
```
