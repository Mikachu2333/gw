# Chart.SetBackgroundPicture

为图表设置背景图形。



## 语法

express.**SetBackgroundPicture(Filename)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | 图形文件名。 |

## 返回值

void

## 示例


```JavaScript
/*此示例为工作表 Sheet1 的第一张内嵌图表设置背景图形。*/
function test() {
    let chart = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart
    chart.SetBackgroundPicture("c:\\graphics\\watermark.gif")
}
```


```JavaScript
/*此示例为图表工作表 Chart1 设置背景图形。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.SetBackgroundPicture("D:/background.png")
}
```
