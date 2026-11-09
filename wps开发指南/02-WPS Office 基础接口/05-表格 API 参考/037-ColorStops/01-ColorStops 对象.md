# ColorStops 对象

指定的数据系列中所有 ColorStop 对象的集合。

## 说明


每个 **ColorStop** 对象代表一个区域或选定内容中渐变填充的一个颜色光圈。


## 示例


```JavaScript
/*以下示例显示了具有线性渐变的颜色停止。*/
function test() {
    let interior = Selection.Interior
    interior.Pattern = xlPatternLinearGradient
    interior.Gradient.Degree = 90
    interior.Gradient.ColorStops.Clear()

    //adds stops after any have been cleared
    let colorStops1 = Selection.Interior.Gradient.ColorStops.Add(0)
    colorStops1.ThemeColor = xlThemeColorDark1
    colorStops1.TintAndShade = 0

    let colorStops2 = Selection.Interior.Gradient.ColorStops.Add(1)
    colorStops2.ThemeColor = xlThemeColorAccent1
    colorStops2.TintAndShade = 0
}
```


```JavaScript
/*以下示例显示了具有矩形渐变的颜色停止点。*/
function test() {
    let interior = Selection.Interior
    interior.Pattern = xlPatternRectangularGradient
    interior.Gradient.RectangleLeft = 0
    interior.Gradient.RectangleRight = 0
    interior.Gradient.RectangleTop = 0
    interior.Gradient.RectangleBottom = 0
    interior.Gradient.ColorStops.Clear()

    let colorStops1 = Selection.Interior.Gradient.ColorStops.Add(0)
    colorStops1.Color = 192
    colorStops1.TintAndShade = 0

    let colorStops2 = Selection.Interior.Gradient.ColorStops.Add(1)
    colorStops2.ThemeColor = xlThemeColorLight1
    colorStops2.TintAndShade = 0
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorStops/member/Add) | 将一个 **[ColorStop](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorStop/obj)** 对象添加到指定集合。 |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorStops/member/Clear) | 清除指定对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorStops/member/Item) | 从指定集合中返回单个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorStops/member/Count) | 返回指定对象的计数。只读。 |