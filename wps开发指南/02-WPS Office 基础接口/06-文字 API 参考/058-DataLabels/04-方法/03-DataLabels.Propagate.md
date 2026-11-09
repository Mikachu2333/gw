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

## 说明


如果源数据标签支持与目标数据标签不兼容的字段，则这些字段将插入到字段名称窗体中。



## 示例


```JavaScript
/*本示例设置活动文档的第一张内嵌图表的第二个数据系列的第一个数据标签的前景填充色和文本，并将该标签的格式和内容传播到系列中的所有其他数据标签。*/
function test() {
    let dataLabels = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(2).DataLabels()
    dataLabels.Item(1).Format.Fill.ForeColor.RGB = RGB(0, 0, 255)
    dataLabels.Item(1).Text = "example"
    dataLabels.Propagate(1)
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的标题文本为“成绩表_2”，则将该图表第二个数据系列的第三个数据标签的格式和内容传播到系列中的所有其他数据标签。*/
function test() {
    let chart = Application.Documents.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "成绩表_2") {
        chart.SeriesCollection(2).DataLabels().Propagate(3)
    }
}
```
