# ColorScaleCriteria.Item

从 **ColorScaleCriteria** 集合中返回单个 **[ColorScaleCriterion](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScaleCriterion/obj)** 对象。只读。



## 语法

express.**Item(Index)**

express   一个代表 **ColorScaleCriteria** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | **ColorScaleCriterion** 对象的索引号。 |

## 返回值

ColorScaleCriterion

## 说明


_Index_ 参数的值不能大于为色阶条件格式设置的条件的数目。条件与为色阶分配的阈值等效。要查找阈值的数目，请使用 **[ColorScaleCriteria.Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScaleCriteria/member/Count)** 属性。



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
/*本示例判断如果活动工作表上单元格区域 A1:A10 的第一个色阶条件格式的第二个阈值条件的类型为xlConditionValuePercentile，则设置该阈值条件的主题颜色和亮度。*/
function test() {
    let colorScale = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    let criterion = colorScale.ColorScaleCriteria.Item(2)
    if (criterion.Type == xlConditionValuePercentile) {
        criterion.FormatColor.ThemeColor = xlThemeColorAccent6
        criterion.FormatColor.TintAndShade = 0.5
    }
}
```
