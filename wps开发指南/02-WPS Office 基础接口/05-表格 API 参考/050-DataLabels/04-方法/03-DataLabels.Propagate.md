# DataLabels.Propagate

使你能够获取单个数据标签的内容和格式，并将其应用于系列中的其他每个数据标签。



## 语法

express.**Propagate(Index)**

express   一个代表 **DataLabels** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要传播的数据标签的索引号。 |

## 返回值

void

## 说明


如果源数据标签支持与目标数据标签不兼容的字段，则这些字段将作为其 [FIELD NAME] 插入。 例如，如果将饼图上具有百分比字段的数据标签传播到柱形图上的数据标签，该百分比字段将成为显示 [PERCENTAGE] 的未解析字段。

传递零 （0） 参数会将数据标签重置为当前原型。



## 示例


```JavaScript
/*此示例将图表工作表 Chart1 中图表的第一个数据序列的第一个数据标签的内容和格式应用于系列中的其他每个数据标签。*/
function test() {
    let datalabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels()
    datalabels.Propagate(1)
}
```


```JavaScript
/*此示例将工作表 Sheet1 中第一个图表的第三个数据序列的第二个数据标签的内容和格式应用于系列中的其他每个数据标签。*/
function test() {
    let datalabels = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(3).DataLabels()
    datalabels.Propagate(2)
}
```
