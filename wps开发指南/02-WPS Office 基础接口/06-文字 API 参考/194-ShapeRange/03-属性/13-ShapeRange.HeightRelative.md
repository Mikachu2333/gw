# ShapeRange.HeightRelative

返回或设置一个 **Single** 类型的值，该值代表将形状区域大小调整到的目标形状的百分比。可读写。



## 语法

express.**HeightRelative**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（float 精度）

## 说明


将此属性与 **[RelativeVerticalSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/RelativeVerticalSize)** 属性一起使用。当设置为 **[wdShapeSizeRelativeNone](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdShapeSizeRelative)** (-999999)（参见 **[WdShapeSizeRelative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdShapeSizeRelative)** 枚举）时，应忽略此属性，因为形状不能使用百分比大小。高度是由 **[Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Height)** 属性单独确定的。



## 示例


```JavaScript
/*本示例将活动文档中第一个形状的 HeightRelative 属性值设置为20。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range(1)
    shapeRange.HeightRelative = 20
}
```


```JavaScript
/*本示例显示第一个文档中第二个形状的 HeightRelative 属性值。*/
function test() {
    let shapeRange = Documents.Item(1).Shapes.Range(2)
    alert(shapeRange.HeightRelative)
}
```
