# ChartObjects.Add

创建新的嵌入式图表。



## 语法

express.**Add(Left, Top, Width, Height)**

express   一个代表 **ChartObjects** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Left | 必选 | number（double 精度） | 以磅为单位给出新对象的初始坐标，该坐标是相对于工作表上单元格 A1 的左上角或图表的左上角的坐标。 |
| Top | 必选 | number（double 精度） | 以磅为单位给出新对象的初始坐标，该坐标是相对于工作表上单元格 A1 的左上角或图表的左上角的坐标。 |
| Width | 必选 | number（double 精度） | 以磅为单位给出新对象的初始大小。 |
| Height | 必选 | number（double 精度） | 以磅为单位给出新对象的初始大小。 |

## 返回值

ChartObject

## 示例


```JavaScript
/*此示例在工作表 Sheet1 中创建新的嵌入式图表。*/
function test() {
    let chartobject = Application.Sheets.Item("Sheet1").ChartObjects().Add(50, 40, 200, 100)
    chartobject.Chart.ChartWizard(Worksheets.Item("Sheet1").Range("A1:B2"), xlColumn, 6, xlColumns, 1, 0, 1)
}
```


```JavaScript
/*此示例在第一张工作表中创建新的嵌入式图表，并使用圆角。*/
function test() {
    let chartobject = Application.Sheets.Item(1).ChartObjects().Add(100, 0, 300, 155.5)
    chartobject.RoundedCorners = true
}
```
