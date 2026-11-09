# Series.ErrorBar

将误差线应用于系列。 **Variant** 类型。



## 语法

express.**ErrorBar(Direction, Include, Type, Amount, MinusValues)**

express   一个代表 **Series** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Direction | 必选 | XlErrorBarDirection | 误差线方向。 |
| Include | 必选 | XlErrorBarInclude | 要包含的误差线部分。 |
| Type | 必选 | XlErrorBarType | 误差线类型。 |
| Amount | 可选 | any | 误差量。当 Type 为 xlErrorBarTypeCustom 时只用于正误差量。 |
| MinusValues | 可选 | any | 当 Type 为 xlErrorBarTypeCustom 时，为负误差量。 |

## 返回值

Variant

## 示例


```JavaScript
/*本示例显示 Chart1 中的第一个数据系列在 Y 方向上的标准误差线。误差线是正负两个方向的。本示例应在二维折线图上运行。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection().Item(1).ErrorBar(xlY, xlErrorBarIncludeBoth, xlErrorBarTypeStError)
}
```


```JavaScript
/*此示例显示活动工作表中的第一个数据系列在 Y 方向上的百分比类型误差线。误差线是正方向的,误差量为10。本示例应在二维折线图上运行。*/
function test() {
    ActiveSheet.ChartObjects(1).Chart.SeriesCollection(1).ErrorBar(xlY, xlErrorBarIncludePlusValues, xlErrorBarTypePercent, 10)
}
```
