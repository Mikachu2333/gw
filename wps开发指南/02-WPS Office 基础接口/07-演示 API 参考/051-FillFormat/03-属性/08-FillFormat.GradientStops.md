# FillFormat.GradientStops

返回与指定填充格式相关联的 **[GradientStops](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GradientStops/obj)** 集合。只读。



## 语法

express.**GradientStops**

express   一个代表 **FillFormat** 对象的变量。

## 类型

GradientStops

## 说明


可以使用 **[GradientStops.Insert2](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GradientStops/member/Insert2)** 方法向指定对象的 **GradientStops** 集合添加渐变光圈。



## 示例


```JavaScript
/*本示例在活动演示文稿第一张幻灯片第一个形状的填充格式的 GradientStops 集合 50% 位置添加渐变光圈。对于此示例正常运行，该形状必须已应用渐变填充。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let fillFormat = shape.Fill
    let gradientStops = fillFormat.GradientStops
    gradientStops.Insert2(msoThemeDark1, 0.5, 0.5, 1)
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一个形状的第一个渐变光圈的 Transparency 属性值。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    let gradientStop = shape.Fill.GradientStops.Item(1)
    alert(gradientStop.Transparency)
}
```
