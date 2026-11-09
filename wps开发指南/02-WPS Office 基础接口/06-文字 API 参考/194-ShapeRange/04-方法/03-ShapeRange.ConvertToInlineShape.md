# ShapeRange.ConvertToInlineShape

将文档绘图层的指定形状转换为文字层的内嵌形状。只能转换代表图片、OLE 对象或 ActiveX 控件的形状。



## 语法

express.**ConvertToInlineShape()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

**[InlineShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/obj)** 

## 说明


支持附加文字的形状不能转换为内嵌形状。对于这样的形状，请使用 **ConvertToFrame** 方法。

如果对包含多个形状的 **ShapeRange** 对象使用此方法，将导致出错。



## 示例


```JavaScript
/*本示例将第一个文档中的每张图片转换为内嵌形状。*/
function test() {
    let shapes = Documents.Item(1).Shapes
    for (let i = shapes.Count; i >= 1; i--) {
        if (shapes.Range(i).Type == msoPicture) {
            shapes.Range(i).ConvertToInlineShape()
        }
    }
}
```


```JavaScript
/*本示例将选中的形状转换为文字层的内嵌形状。*/
function test() {
    Selection.ShapeRange.ConvertToInlineShape()
}
```
