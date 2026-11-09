# Series.ErrorBar

将误差线应用于系列。



## 语法

express.**ErrorBar(Direction, Include, Type, Amount, MinusValues)**

express   一个代表 **Series** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Direction | 必选 | XlErrorBarDirection | 指定误差线方向的一个枚举值。 |
| Include | 必选 | XlErrorBarInclude | 指定要包含的误差线部分的一个枚举值。 |
| Type | 必选 | XlErrorBarType | 指定误差线类型的一个枚举值。 |
| Amount | 可选 | any | 误差量。当 Type 为 **xlErrorBarTypeCustom** 时只用于正误差量。 |
| MinusValues | 可选 | any | 当 Type 为 **xlErrorBarTypeCustom** 时，为负误差量。 |

## 返回值

any

## 示例


```JavaScript
/*本示例在活动文档中第一个图表的第一个系列的 y 轴上应用标准误差线。应用的误差线为正负两个方向。应在二维折线图上运行该示例。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let series = inlineShape.Chart.SeriesCollection(1)
        series.ErrorBar(xlChartY, xlErrorBarIncludeBoth, xlErrorBarTypeStError)
    }
}
```


```JavaScript
/*本示例在选中图表的第二个系列的 y 轴上应用百分比类型误差线。误差线是正方向的，误差量为10。应在二维折线图上运行该示例。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let series = inlineShape.Chart.SeriesCollection(2)
        series.ErrorBar(xlChartY, xlErrorBarIncludePlusValues, xlErrorBarTypePercent, 10)
    }
}
```
