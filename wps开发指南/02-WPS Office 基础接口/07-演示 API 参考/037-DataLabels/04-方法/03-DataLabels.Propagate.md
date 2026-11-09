# DataLabels.Propagate

将指定数据标签的内容和格式传播到系列中的所有其他数据标签。



## 语法

express.**Propagate(Index)**

express   一个代表 **DataLabels** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要传播的数据标签的 **DataLabels** 集合中的索引号。 |

## 返回值

void

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片的第一张图表的第二个数据系列的第一个数据标签的前景填充色和文本，并将该标签的格式和内容传播到系列中的所有其他数据标签。*/
function test() {
    let dataLabels = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).DataLabels()
    dataLabels.Item(1).Format.Fill.ForeColor.RGB = RGB(0, 0, 255)
    dataLabels.Item(1).Text = "example"
    dataLabels.Propagate(1)
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的标题文本为“test”，则将该图表第二个数据系列的第三个数据标签的格式和内容传播到系列中的所有其他数据标签。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "test") {
        chart.SeriesCollection(2).DataLabels().Propagate(3)
    }
}
```
