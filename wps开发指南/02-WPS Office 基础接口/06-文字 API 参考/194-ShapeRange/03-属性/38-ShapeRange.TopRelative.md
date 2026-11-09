# ShapeRange.TopRelative

返回或设置一个 **Single** 类型的值，该值代表形状区域顶部的相对位置。可读写。



## 语法

express.**TopRelative**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（float 精度）

## 说明


将此属性与 **[RelativeVerticalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/RelativeVerticalPosition)** 属性一起使用。当设置为 **wdShapePositionRelativeNone** (-999999)（参见 **[WdShapePositionRelative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdShapePositionRelative)** 枚举）时，应忽略此属性，因为该形状不能使用百分比定位。垂直位置是由 **[Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Top)** 属性单独确定的。



## 示例


```JavaScript
/*本示例设置活动文档中第一个和第二个形状的顶部相对于页面的位置。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 2])
    shapeRange.RelativeVerticalPosition = wdRelativeVerticalPositionPage
    shapeRange.TopRelative = 20
}
```


```JavaScript
/*本示例显示选中形状的顶部相对于外空白区的位置。*/
function test() {
    let shapeRange = Selection.ShapeRange
    shapeRange.RelativeVerticalPosition = wdRelativeVerticalPositionOuterMarginArea
    alert(shapeRange.TopRelative)
}
```
