# ColorScale.ColorScaleCriteria

返回一个 **[ColorScaleCriteria](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScaleCriteria/obj)** 对象，该对象是单个 **[ColorScaleCriterion](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScaleCriterion/obj)** 对象的集合。 **ColorScaleCriterion** 对象指定用于色阶条件格式的阈值条件的类型、值和颜色。只读。



## 语法

express.**ColorScaleCriteria**

express   一个代表 **ColorScale** 对象的变量。

## 类型

ColorScaleCriteria

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
/*本示例判断如果活动工作表上单元格区域 A1:A10 的第一个色阶条件格式的第三个阈值条件的类型为xlConditionValueHighestValue，则设置该阈值条件的主题颜色和亮度。*/
function test() {
    let colorScale = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    let criterion = colorScale.ColorScaleCriteria.Item(3)
    if (criterion.Type == xlConditionValueHighestValue) {
        criterion.FormatColor.ThemeColor = xlThemeColorAccent3
        criterion.FormatColor.TintAndShade = 0.5
    }
}
```
