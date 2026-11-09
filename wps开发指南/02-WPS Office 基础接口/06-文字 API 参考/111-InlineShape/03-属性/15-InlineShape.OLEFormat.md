# InlineShape.OLEFormat

返回一个 **OLEFormat** 对象，该对象代表指定的内嵌形状的 OLE 特征（链接除外）。只读



## 语法

express.**OLEFormat**

express   一个代表 **InlineShape** 对象的变量。

## 类型

OLEFormat

## 示例


```JavaScript
/*本示例打开活动文档上第一个 OLEFormat 对象。*/
function test() {
    let oleFormat = ActiveDocument.InlineShapes.Item(1).OLEFormat
    oleFormat.Open()
}
```


```JavaScript
/*本示例显示所选的第二个 OLE 对象的类型。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(2)
    alert(inlineShape.OLEFormat.ClassType)
}
```
