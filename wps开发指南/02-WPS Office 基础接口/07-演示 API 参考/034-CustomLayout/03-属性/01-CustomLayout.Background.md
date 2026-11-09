# CustomLayout.Background

返回代表幻灯片背景的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象。只读。



## 语法

express.**Background**

express   一个代表 **CustomLayout** 对象的变量。

## 类型

ShapeRange

## 示例


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版关联的最后一个自定义版式的背景的名称。*/
function test() {
    let customLayouts = ActivePresentation.SlideMaster.CustomLayouts
    alert(customLayouts.Item(customLayouts.Count).Background.Name)
}
```


```JavaScript
/*本示例设置活动窗口所选的第一张幻灯片关联的自定义版式的背景的前景填充色和背景线条的虚线线型。*/
function test() {
    let customLayout = ActiveWindow.Selection.SlideRange.Item(1).CustomLayout
    customLayout.Background.Fill.ForeColor.RGB = RGB(0, 255, 255)
    customLayout.Background.Line.DashStyle = msoLineDash
}
```
