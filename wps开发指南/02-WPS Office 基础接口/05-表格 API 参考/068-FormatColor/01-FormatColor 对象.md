# FormatColor 对象

代表为色阶条件格式阈值指定的填充色或数据条条件格式的条形颜色。

## 说明


您可以通过传递 [ **Color** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/member/Color) 属性中的 RGB 值来选择颜色，或者通过使用 [ **ThemeColor** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/member/ThemeColor) 属性在主题调色板中编制索引来指定颜色。

以下代码示例创建了一个数字范围，然后将双色色阶条件格式规则应用于该范围。然后通过在 **ColorScaleCriteria** 集合中编制索引来设置单独的条件，从而指定最小阈值的颜色为红色，最大阈值的颜色为蓝色。


## 示例


```JavaScript
/*以下代码示例创建了一个数字范围，然后将双色色阶条件格式规则应用于该范围。然后，通过索引到 ColorScaleCriteria 集合以设置单个条件，将最小阈值的颜色分配给红色，并将最大阈值分配给蓝色。*/
function test() {
    //Fill cells with sample data from 1 to 10
    ActiveSheet.Range("C1").Value2 = 1
    ActiveSheet.Range("C2").Value2 = 2
    ActiveSheet.Range("C1:C2").AutoFill(Range("C1:C10"))

    Range("C1:C10").Select()

    //Create a two-color ColorScale object for the created sample data range
    let colorScale = Selection.FormatConditions.AddColorScale(2)

    //Set the minimum threshold to red and maximum threshold to blue
    colorScale.ColorScaleCriteria.Item(1).FormatColor.Color = RGB(255, 0, 0)
    colorScale.ColorScaleCriteria.Item(2).FormatColor.Color = RGB(0, 0, 255)
}
```


```JavaScript
/*本示例显示指定单元格区域的第一个色阶条件格式中第二个条件的最大阈值的主题颜色是否为xlThemeColorAccent1。*/
function test() {
    let formatCondition = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    alert(formatCondition.ColorScaleCriteria.Item(2).FormatColor.ThemeColor == xlThemeColorAccent1)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/member/Color) | 返回或设置与数据条或色阶条件格式规则的阈值关联的填充色。 |
| [ColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/member/ColorIndex) | 返回或设置 **[XlColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlColorIndex)** 枚举的常量之一，指定是否以当前调色板中颜色的索引值形式表示填充色。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/member/Parent) | 返回指定对象的父对象。只读。 |
| [ThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/member/ThemeColor) | 返回或设置一个 **[XlThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlThemeColor)** 枚举常量，该值指定数据条或色阶条件格式阈值中所用的主题颜色。 |
| [TintAndShade](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/member/TintAndShade) | 返回或设置一个 **Single** 类型的值，该值使用于数据条或色阶条件格式规则的单元格的填充颜色变浅或变深。 |