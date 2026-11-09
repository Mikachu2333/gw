# LinkFormat.SavePictureWithDocument

如果指定的图片与文档一起保存，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**SavePictureWithDocument**

express   一个代表 **LinkFormat** 对象的变量。

## 类型

boolean

## 说明


本属性只适用于链接至图片的图形和嵌入式图形。



## 示例


```JavaScript
/*本示例判断如果活动文档的第一个嵌入式形状为链接的 OLE 对象，则该形状与文档一起保存。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.Type == wdInlineShapeLinkedOLEObject) {
        inlineShape.LinkFormat.SavePictureWithDocument = true
    }
}
```


```JavaScript
/*本示例显示第一个文档的第一个形状是否与文档一起保存。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(1)
    alert(shape.LinkFormat.SavePictureWithDocument)
}
```
