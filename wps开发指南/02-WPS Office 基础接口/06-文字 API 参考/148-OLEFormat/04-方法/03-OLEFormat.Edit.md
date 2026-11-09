# OLEFormat.Edit

在创建指定 OLE 对象的应用程序中打开该对象，以便进行编辑。



## 语法

express.**Edit()**

express   一个代表 **OLEFormat** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例打开（为了进行编辑）活动文档中第一个嵌入式 OLE 对象（定义为图形）。*/
function test() {
    let shapes = ActiveDocument.Shapes
    if (shapes.Count >= 1 && shapes.Item(1).Type == msoEmbeddedOLEObject) {
        shapes.Item(1).OLEFormat.Edit()
    }
}
```


```JavaScript
/*本示例打开（为了进行编辑）活动文档中第一个链接的 OLE 对象（定义为嵌入式图形）。*/
function test() {
    let inlineShapes = ActiveDocument.InlineShapes
    if (inlineShapes.Count >= 1 && inlineShapes.Item(1).Type == wdInlineShapeLinkedOLEObject) {
        inlineShapes.Item(1).OLEFormat.Edit()
    }
}
```
