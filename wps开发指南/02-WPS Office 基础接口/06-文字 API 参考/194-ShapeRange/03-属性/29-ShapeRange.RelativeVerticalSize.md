# ShapeRange.RelativeVerticalSize

返回或设置一个 **[WdRelativeVerticalSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRelativeVerticalSize)** 常量，该常量代表形状区域相对的对象。可读写。



## 语法

express.**RelativeVerticalSize**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

WdRelativeVerticalSize

## 说明


此属性可与 **[HeightRelative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/HeightRelative)** 属性一起使用。



## 示例


```JavaScript
/*本示例设置活动文档上包含第一个和第二个形状的形状范围相对于上边距的高度。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 2])
    shapeRange.RelativeVerticalSize = wdRelativeVerticalSizeTopMarginArea
    shapeRange.HeightRelative = 50
}
```


```JavaScript
/*本示例显示选中形状范围相对于页面的高度。*/
function test() {
    let shapeRange = Selection.ShapeRange
    shapeRange.RelativeVerticalSize = wdRelativeVerticalSizePage
    alert(shapeRange.HeightRelative)
}
```
