# AxisTitle.Text

返回或设置指定对象中的文本。 **String** 型，可读写。



## 语法

express.**Text**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例设置图表工作表 Chart1 中图表的分类轴标题文本。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory)
    axis.HasTitle = true
    axis.AxisTitle.Text = "Month"
}
```


```JavaScript
/*此示例显示工作表 Sheet1 中第一张图表的数值轴标题文本。*/
function test() {
    let axistitle = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    alert(axistitle.AxisTitle.Text)
}
```
