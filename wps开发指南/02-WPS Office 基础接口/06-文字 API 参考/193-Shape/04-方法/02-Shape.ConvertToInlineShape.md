# Shape.ConvertToInlineShape

将文档绘图层的指定图形转换为文字层的嵌入式图形。只能转换代表图片、OLE 对象或 ActiveX 控件的图形。此方法返回一个 **InlineShape** 对象，该对象代表图片或 OLE 对象。



## 语法

express.**ConvertToInlineShape()**

express   一个代表 **Shape** 对象的变量。

## 返回值

InlineShape

## 说明


支持附加文字的图形不能转换为嵌入式图形。对这样的图形请使用 **ConvertToFrame** 方法。

如果对包含多个图形的 **ShapeRange** 对象使用此方法，将导致出错。



## 示例


```JavaScript
/*本示例将第一个文档中的每张图片转换为嵌入式图形。*/
function test() {
    for (let i = 1; i <= Documents.Item(1).Shapes.Count; i++) {
        if (Documents.Item(1).Shapes.Item(i).Type == msoPicture) {
            Documents.Item(1).Shapes.Item(i).ConvertToInlineShape()
        }
    }
}
```


```JavaScript
/*本示例将活动文档第一个形状转换为嵌入式图形。*/
function test() {
    ActiveDocument.Shapes.Item(1).ConvertToInlineShape()
}
```
