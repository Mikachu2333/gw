# ChartObject.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **ChartObject** 对象的变量。

## 类型

string

## 说明


此属性对图表对象（嵌入式图表）而言是只读的。



## 示例


```JavaScript
/*此示例显示第一张工作表中第一张图表的名称。*/
function test() {
    let chartobject = Application.Worksheets.Item(1).ChartObjects(1)
    alert(chartobject.Name)
}
```


```JavaScript
/*此示例显示工作表 Sheet1 中第一张图表的名称是否为 Chart 1 。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects(1)
    alert(chartobject.Name == "Chart 1")
}
```
