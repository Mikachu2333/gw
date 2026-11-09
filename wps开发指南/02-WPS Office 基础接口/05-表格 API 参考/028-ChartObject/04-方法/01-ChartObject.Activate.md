# ChartObject.Activate

使当前图表成为活动图表。



## 语法

express.**Activate()**

express   一个代表 **ChartObject** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例激活工作表 Sheet1 中第一张内嵌图表。*/
function test() {
    Application.Worksheets.Item("Sheet1").ChartObjects(1).Activate()
}
```


```JavaScript
/*本示例激活第一张工作表中内嵌图表 Chart 2 。*/
function test() {
    Application.Worksheets.Item(1).ChartObjects("Chart 2").Activate()
}
```
