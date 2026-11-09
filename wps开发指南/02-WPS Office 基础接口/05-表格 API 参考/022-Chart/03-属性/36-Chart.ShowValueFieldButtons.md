# Chart.ShowValueFieldButtons

返回或设置是否要在数据透视图上显示值字段按钮。可读/写。



## 语法

express.**ShowValueFieldButtons**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 说明


将 **ShowValueFieldButtons** 属性设置为 **True** 将在指定的数据透视图上显示 **“值字段”** 按钮。将该属性设置为 **False** 将隐藏这些按钮。

 **ShowValueFieldButtons** 属性对应于 **“分析”** 选项卡（在选择数据透视图时可用）的 **“字段按钮”** 下拉列表中的 **“显示值字段按钮”** 命令。



## 示例


```JavaScript
/*本示例将工作表 Sheet 2 第一个图表工作表设置为显示值字段按钮。*/
function test() {
    let chart = Application.Sheets.Item("Sheet2").ChartObjects(1).Chart
    chart.ShowValueFieldButtons = true
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 是否显示值字段按钮，并通知用户。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    if (chart.ShowValueFieldButtons) {
        alert("图表显示值字段按钮")
    } else {
        alert("图表不显示值字段按钮")
    }
}
```
