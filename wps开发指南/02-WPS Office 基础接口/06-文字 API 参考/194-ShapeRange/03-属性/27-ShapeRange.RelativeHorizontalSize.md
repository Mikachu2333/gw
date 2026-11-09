# ShapeRange.RelativeHorizontalSize

返回或设置一个 **[WdRelativeHorizontalSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRelativeHorizontalSize)** 常量，该常量代表形状区域相对的对象。可读写。



## 语法

express.**RelativeHorizontalSize**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

WdRelativeHorizontalSize

## 说明


此属性可与 **[WidthRelative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/WidthRelative)** 属性一起使用。



## 示例


```JavaScript
/*本示例设置活动文档上包含第一个和第二个形状的形状范围相对于左边距的宽度。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 2])
    shapeRange.RelativeHorizontalSize = wdRelativeHorizontalSizeLeftMarginArea
    shapeRange.WidthRelative = 50
}
```


```JavaScript
/*本示例显示选中形状范围相对于页面的宽度。*/
function test() {
    let shapeRange = Selection.ShapeRange
    shapeRange.RelativeHorizontalSize = wdRelativeHorizontalSizePage
    alert(shapeRange.WidthRelative)
}
```
