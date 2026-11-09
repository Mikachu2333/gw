# Workbook.PrecisionAsDisplayed

如果工作簿中的计算将按照屏幕显示的数字精度完成，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PrecisionAsDisplayed**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使活动工作簿中的计算仅使用显示的数字精度。*/
function test() {
    ActiveWorkbook.PrecisionAsDisplayed = true
}
```


```JavaScript
/*本示例将PrecisionAsDisplayed属性设置为 false ，并显示PrecisionAsDisplayed属性的数据类型。*/
function test() {
    ActiveWorkbook.PrecisionAsDisplayed = false
    alert(`已将PrecisionAsDisplayed属性设置为 false\nPrecisionAsDisplayed属性的数据类型为：${typeof ActiveWorkbook.PrecisionAsDisplayed}`)
}
```
