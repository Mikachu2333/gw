# Range.ShapeRange

返回一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/obj)** 集合，该集合代表指定范围中的所有 **Shape** 对象。只读。



## 语法

express.**ShapeRange**

express   一个代表 **Range** 对象的变量。

## 类型

ShapeRange

## 说明


图形范围可以包含绘图、图形、图片、OLE 对象、ActiveX 控件、文本对象和标注。



## 示例


```JavaScript
/*本示例将活动文档的主文档文章中所有图形的填充前景色设置为品红色。*/
function test() {
    ActiveDocument.Content.ShapeRange.Fill.ForeColor.RGB = RGB(255, 0, 255)
}
```


```JavaScript
/*本示例设置所选形状的高度和宽度。*/
function test() {
    let shapeRange = Selection.Range.ShapeRange
    shapeRange.Height = 100
    shapeRange.Width = 100
}
```
