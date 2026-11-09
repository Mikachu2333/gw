# DisplayUnitLabel.Text

返回或设置指定对象中的文本。 **String** 型，可读写。



## 语法

express.**Text**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中数值轴上的单位标签文本。*/
function test() {
    let displayUnitLabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Text)
}
```


```JavaScript
/*下例设置 Sheet1 上的第一个图表数值轴上的单位标签文本。*/
function test() {
    let displayUnitLabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Text = "万"
}
```
