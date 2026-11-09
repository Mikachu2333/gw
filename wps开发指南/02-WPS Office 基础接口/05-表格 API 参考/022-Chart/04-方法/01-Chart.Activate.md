# Chart.Activate

使当前图表成为活动图表。



## 语法

express.**Activate()**

express   一个代表 **Chart** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例激活第一张图表工作表为活动图表。*/
function test() {
    Application.Charts.Item(1).Activate()
}
```


```JavaScript
/*本示例激活图表工作表Chart2为活动图表。*/
function test() {
    Application.Charts.Item("Chart2").Activate()
}
```
