# Chart.ShowAxisFieldButtons

返回或设置是否要在数据透视图上显示坐标轴字段按钮。可读/写。



## 语法

express.**ShowAxisFieldButtons**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 说明


将 **ShowAxisFieldButtons** 属性设置为 **True** 将在指定的数据透视图上显示坐标轴字段按钮。将该属性设置为 **False** 将隐藏这些按钮。

 **ShowAxisFieldButtons** 属性对应于 **“分析”** 选项卡（在选择数据透视图时可用）的 **“字段按钮”** 下拉列表中的 **“显示坐标轴字段按钮”** 命令。



## 示例


```JavaScript
/*本示例将图表工作表 Chart1 设置为隐藏坐标轴字段按钮。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.ShowAxisFieldButtons = false
}
```


```JavaScript
/*本示例判断工作表 Sheet2 中第一个内嵌图表是否显示坐标轴字段按钮，并通知用户。*/
function test() {
    let chart = Application.Sheets.Item("Sheet2").ChartObjects(1).Chart
    if (chart.ShowAxisFieldButtons) {
        alert("图表显示坐标轴按钮")
    } else {
        alert("图表未显示坐标轴按钮")
    }
}
```
