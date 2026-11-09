# GradientStop 对象

代表一个渐变光圈。

## 说明


渐变是指从一种颜色状态到另一种颜色状态的平缓过渡。这些部分的端点称为光圈。


## 示例


```JavaScript
/*本示例运行于表格组件，为活动工作表的第一个形状设置前景填充色，并为该形状添加三个渐变颜色光圈，然后设置最后一个渐变光圈的透明度，最后删除第一个渐变光圈。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(1).Fill
    fillFormat.ForeColor.RGB = RGB(0, 128, 128)
    let gradientStops = fillFormat.GradientStops
    gradientStops.Insert2(msoThemeAccent1, 0.25, null, 1)
    gradientStops.Insert2(msoThemeLight1, 0.5, null, 2)
    gradientStops.Insert2(msoThemeLight2, 0.75, null, 3)
    gradientStops.Item(gradientStops.Count).Transparency = 0.3
    gradientStops.Delete(1)
}
```


```JavaScript
/*本示例运行于表格组件，设置第一个工作表的第一形状渐变填充的第一个渐变光圈的颜色和位置的值。*/
function test() {
    let fillFormat = Worksheets.Item(1).Shapes.Item(1).Fill
    let gradientStop = fillFormat.GradientStops.Item(1)
    gradientStop.Color.RGB = RGB(0, 0, 255)
    gradientStop.Position = 0.8
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GradientStop/member/Color) | 获取一个代表渐变光圈的颜色的值。只读。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GradientStop/member/Position) | 获取或设置一个以百分比形式表示的代表渐变内光圈的位置的值。可读/写。 |
| [Transparency](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GradientStop/member/Transparency) | 获取或设置一个以百分比形式表示的代表渐变填充不透明度的值。可读/写。 |