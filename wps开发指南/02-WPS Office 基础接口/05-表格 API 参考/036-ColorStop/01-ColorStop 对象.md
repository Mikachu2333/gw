# ColorStop 对象

表示某一区域或选定内容中渐变填充的光圈点。

## 说明


 **ColorStop** 对象可用来设置单元格填充属性，包括 **Color** 、 **ThemeColor** 和 **TintAndShade** 属性。


## 示例


```JavaScript
/*以下示例演示如何对 ColorStop 对象应用属性。*/
function test() {
    let interior = Application.Selection.Interior
    interior.Pattern = xlPatternLinearGradient
    interior.Gradient.Degree = 135
    interior.Gradient.ColorStops.Clear()

    let colorStops1 = Selection.Interior.Gradient.ColorStops.Add(0)
    colorStops1.ThemeColor = xlThemeColorDark1
    colorStops1.TintAndShade = 0

    let colorStops2 = Application.Selection.Interior.Gradient.ColorStops.Add(0.5)
    colorStops2.ThemeColor = xlThemeColorAccent1
    colorStops2.TintAndShade = 0

    let colorStops3 = Application.Selection.Interior.Gradient.ColorStops.Add(1)
    colorStops3.ThemeColor = xlThemeColorDark1
    colorStops3.TintAndShade = 0
}
```


```JavaScript
/*本示例显示当前选定区域的第一个ColorStop对象的位置。*/
function test() {
    Range("A1:A10").Select()
    let colorStop = Selection.Interior.Gradient.ColorStops.Item(1)
    alert(colorStop.Position)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorStop/member/Delete) | 删除指定对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorStop/member/Application) | 如果不使用对象识别符，则该属性返回一个代表 ET 应用程序的 **Application** 对象。如果使用对象识别符，则该属性返回一个代表指定对象的创建程序的 **Application** 对象（可对一个 OLE 自动化对象使用该属性来返回该对象的应用程序）。只读。 |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorStop/member/Color) | 返回或设置指定对象的颜色。可读/写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorStop/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorStop/member/Parent) | 返回指定对象的父对象。只读。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorStop/member/Position) | 返回或设置 **ColorStop** 对象的位置。可读/写。 |
| [ThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorStop/member/ThemeColor) | 返回或设置指定对象的主颜色。可读/写。 |
| [TintAndShade](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorStop/member/TintAndShade) | 返回或设置指定对象的淡色和阴影。可读/写。 |