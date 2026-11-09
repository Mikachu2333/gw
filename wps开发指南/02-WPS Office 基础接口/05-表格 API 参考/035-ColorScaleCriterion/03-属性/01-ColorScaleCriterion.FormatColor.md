# ColorScaleCriterion.FormatColor

返回一个 **[FormatColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/obj)** 对象，该对象指定分配给色阶条件格式的阈值的颜色。只读。



## 语法

express.**FormatColor**

express   一个代表 **ColorScaleCriterion** 对象的变量。

## 类型

FormatColor

## 说明


通过使用 **[Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/member/Color)** 属性，您可以将最小、中点或最大阈值的颜色设置为任何自定义的颜色；或者使用 **[ThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/member/ThemeColor)** 属性。



## 示例


```JavaScript
/*本示例设置活动工作表上单元格区域 A1:A10 的第二个色阶条件格式的阈值条件的颜色。*/
function test() {
    let colorScale = ActiveSheet.Range("A1:A10").FormatConditions.Item(2)
    colorScale.ColorScaleCriteria.Item(1).FormatColor.Color = RGB(255, 0, 0)
    colorScale.ColorScaleCriteria.Item(2).FormatColor.ColorIndex = 7
}
```


```JavaScript
/*本示例判断如果活动工作表上单元格区域 A1:A10 的第一个色阶条件格式的第二个阈值条件的类型为xlConditionValueHighestValue，则设置该阈值条件的主题颜色和亮度。*/
function test() {
    let colorScale = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    let criterion = colorScale.ColorScaleCriteria.Item(2)
    if (criterion.Type == xlConditionValueHighestValue) {
        criterion.FormatColor.ThemeColor = xlThemeColorAccent6
        criterion.FormatColor.TintAndShade = 0.5
    }
}
```
