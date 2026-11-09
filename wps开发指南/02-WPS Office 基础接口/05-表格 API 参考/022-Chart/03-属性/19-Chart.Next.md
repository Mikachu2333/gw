# Chart.Next

返回代表下一个工作表的 **[Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)** 对象。



## 语法

express.**Next**

express   一个代表 **Chart** 对象的变量。

## 类型

Object

## 说明


如果该对象为区域，则此属性会模拟 Tab 键，但会返回下一个单元格，而不选中它。

在处于保护状态的工作表中，此属性返回下一个未锁定单元格。在未保护的工作表中，此属性总是返回紧靠指定单元格右边的单元格。



## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 下一个工作表的索引号。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    alert(chart.Next.Index)
}
```


```JavaScript
/*本示例激活图表工作表 Chart1 下一个工作表。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.Next.Activate()
}
```
