# Application.ShowChartTipValues

如果图表显示图表提示值，则该值为 **True** 。默认值是 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**ShowChartTipValues**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例关闭图表提示的名称以及值。*/
function test() {
    Application.ShowChartTipNames = false
    Application.ShowChartTipValues = false
}
```


```JavaScript
/*本示例显示图表是否展示提示值。*/
function test() {
    alert(Application.ShowChartTipValues)
}
```
