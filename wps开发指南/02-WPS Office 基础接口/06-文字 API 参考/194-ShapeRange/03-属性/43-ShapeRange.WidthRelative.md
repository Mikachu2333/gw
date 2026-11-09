# ShapeRange.WidthRelative

返回或设置一个 **Single** 类型的值，该值代表形状区域的相对宽度。可读写。



## 语法

express.**WidthRelative**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（float 精度）

## 说明


将此属性与 **[RelativeHorizontalSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/RelativeHorizontalSize)** 属性一起使用。当设置为 **wdShapeSizeRelativeNone** (-999999)（参见 **[WdShapeSizeRelative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdShapeSizeRelative)** 枚举）时，应忽略此属性，因为形状不能使用百分比大小。宽度是由 **[Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Width)** 属性单独确定的。



## 示例


```JavaScript
/*本示例设置活动文档中第一个和第二个形状相对于页面的宽度。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 2])
    shapeRange.RelativeHorizontalSize = wdRelativeHorizontalSizePage
    shapeRange.WidthRelative = 50
}
```


```JavaScript
/*本示例显示选中形状相对于左边距的宽度。*/
function test() {
    let shapeRange = Selection.ShapeRange
    shapeRange.RelativeHorizontalSize = wdRelativeHorizontalSizeLeftMarginArea
    alert(shapeRange.WidthRelative)
}
```
