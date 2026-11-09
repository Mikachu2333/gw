# Tab 对象

代表图表或工作表中的标签。

## 说明


使用 **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/obj)** 对象或 **[Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)** 对象的 **[Tab](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Tab)** 属性可返回一个 **Tab** 对象。

一旦返回了 **Tab** 对象，您就可以使用 **[ColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Tab/member/ColorIndex)** 属性来确定图表或工作表标签的设置。


## 示例


```JavaScript
/*本示例为ET判断第一个工作表的标签的颜色索引是否设置为无，并通知用户。*/
function test() {
    // Determine if color index of 1st tab is set to none.
    if (Worksheets.Item(1).Tab.ColorIndex == xlColorIndexNone) {
        alert("The color index is set to none for the first worksheet tab.")
    } else {
        alert("The color index for the tab of the first worksheet is not set none.")
    }
}
```


```JavaScript
/*本示例设置工作表 Sheet1 选项卡的颜色和亮度。*/
function test() {
    let tab = Worksheets.Item("Sheet1").Tab
    tab.Color = RGB(0, 255, 255)
    tab.TintAndShade = 0.6
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Tab/member/Color) | 返回或设置对象的主要颜色，如注释部分中的表格所示。使用 **RGB** 函数可创建颜色值。 **Variant** 型，可读写。 |
| [ColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Tab/member/ColorIndex) | 返回或设置一个 **Variant** 值，它代表指定的工作表或图表选项卡的颜色。 |
| [ThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Tab/member/ThemeColor) | 返回或设置已应用的配色方案中的主题颜色，该配色方案与指定对象相关联。可读/写 **[XlThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlThemeColor)** 类型。 |
| [TintAndShade](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Tab/member/TintAndShade) | 返回或设置一个 **Single** ，使颜色变深或变浅。 |