# Series.ErrorBar

将误差线应用于系列。



## 语法

express.**ErrorBar(Direction, Include, Type, Amount, MinusValues)**

express   一个代表 **Series** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Direction | 必选 | XlErrorBarDirection | 指定误差线方向的枚举值之一。 |
| Include | 必选 | XlErrorBarInclude | 指定要包含的误差线部分的枚举值之一。 |
| Type | 必选 | XlErrorBarType | 指定误差线类型的枚举值之一。 |
| Amount | 可选 | any | 误差量。当 _Type_ 为 **xlErrorBarTypeCustom** 时只用于正误差量。 |
| MinusValues | 可选 | any | 当 _Type_ 为 **xlErrorBarTypeCustom** 时，为负误差量。 |

## 返回值

any

## 示例


```JavaScript
/*本示例对活动演示文稿上第一张幻灯片中第一个图表的第一个系列应用 Y 轴的标准误差线。误差线按正负两个方向应用。应在二维折线图上运行该示例。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let series = shape.Chart.SeriesCollection(1)
        series.ErrorBar(xlChartY, xlErrorBarIncludeBoth, xlErrorBarTypeStError)
    }
}
```


```JavaScript
/*本示例对第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列应用 Y 轴的百分比类型误差线。误差线是正方向的，误差量为10。应在二维折线图上运行该示例。*/
function test() {
    let series = Presentations.Item(1).Slides.Item(2).Shapes.Item(1).Chart.SeriesCollection(3)
    series.ErrorBar(xlChartY, xlErrorBarIncludePlusValues, xlErrorBarTypePercent, 10)
}
```
