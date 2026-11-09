# Chart.Export

以图形格式导出图表。



## 语法

express.**Export(Filename, FilterName, Interactive)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | 被导出的文件的名称。 |
| FilterName | 可选 | any | 图形过滤器出现在注册表中时独立于语言的名称。 |
| Interactive | 可选 | any | 如果为 True，则显示包含筛选器特定选项的对话框。如果为 False，则 ET 使用筛选器的默认值。默认值是 False。 |

## 返回值

boolean

## 示例


```JavaScript
/*此示例以 PNG 文件格式导出图表工作表 Chart1。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.Export("current_sales.png", "PNG")
}
```


```JavaScript
/*此示例以 JPG 文件格式导出工作表 Sheet1 中第一个内嵌图表。*/
function test() {
    let chart = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart
    chart.Export("chart.jpg", "JPG", true)
}
```
