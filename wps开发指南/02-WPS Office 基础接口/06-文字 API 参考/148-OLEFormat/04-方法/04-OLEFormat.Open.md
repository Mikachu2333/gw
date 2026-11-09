# OLEFormat.Open

打开指定的 **OLEFormat** 对象。



## 语法

express.**Open()**

express   一个代表 **OLEFormat** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例打开活动文档中第一个形状中的 OLE 对象。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    shape.OLEFormat.Open()
}
```


```JavaScript
/*本示例打开第一个文档中第一个内嵌形状中的 OLE 对象。*/
function test() {
    let inlineShape = Documents.Item(1).InlineShapes.Item(1)
    inlineShape.OLEFormat.Open()
}
```
