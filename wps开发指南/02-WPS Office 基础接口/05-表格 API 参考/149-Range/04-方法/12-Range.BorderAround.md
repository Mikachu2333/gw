# Range.BorderAround

向单元格区域添加边框，并设置该新边框的 **[Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/member/Color)** 、 **[LineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/member/LineStyle)** 和 **[Weight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/member/Weight)** 属性。 **Variant** 类型。



## 语法

express.**BorderAround(LineStyle, Weight, ColorIndex, Color, ThemeColor)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| LineStyle | 可选 | any | 指定边框线型的 **[XlLineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlLineStyle)** 常量之一。 |
| Weight | 可选 | XlBorderWeight | 边框粗细。 |
| ColorIndex | 可选 | XlColorIndex | 边框颜色，作为当前调色板的索引或作为 **XlColorIndex** 常量。 |
| Color | 可选 | any | 边框颜色，以 RGB 值表示。 |
| ThemeColor | 可选 | any | 主题颜色，作为当前颜色主题的索引，或作为 **[XlThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlThemeColor)** 值。 |

## 返回值

Variant

## 说明


必须只指定以下一项：_ColorIndex_、_Color_ 或 _ThemeColor_。

可指定 _LineStyle_ 或 _Weight_，但不能同时指定这两者。如果未指定任何参数，ET 将使用默认的线条样式和粗细。

本方法只绘制了整个区域的外框，而不填充该区域。如果要设置所有单元格的边框，就必须设置 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/obj)** 集合的 **Color** 、 **LineStyle** 和 **Weight** 属性。要清除边框，必须将区域中所有单元格的 **LineStyle** 属性设置为 **xlLineStyleNone** 。



## 示例


```JavaScript
/*本示例在 Sheet1 的区域 A1:D4 周围添加红色粗边框。*/
function test() {
    Worksheets("Sheet1").Range("A1:D4").BorderAround(undefined, xlThick, 3)
}
```


```JavaScript
/*本示例将 A1:C3 单元格区域边框设置为实线、中等宽度、通过 RGB 设置红色*/
function test() {
    Range("A1:C3").BorderAround(xlContinuous, xlMedium, null, RGB(255, 0, 0))
}
```
