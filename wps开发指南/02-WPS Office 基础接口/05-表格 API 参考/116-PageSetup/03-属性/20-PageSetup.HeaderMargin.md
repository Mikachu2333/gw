# PageSetup.HeaderMargin

以磅为单位返回或设置页面顶端到页眉的距离。 **Double** 类型，可读写。



## 语法

express.**HeaderMargin**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（double 精度）

## 说明


边距的设置和返回均以磅为单位。可使用 **InchesToPoints** 方法进行英寸到磅值的转换，也可使用 **CentimetersToPoints** 方法进行厘米到磅值的转换。



## 示例


```JavaScript
/*本示例将 Sheet1 的页眉边距设置为 0.5 英寸。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.HeaderMargin = Application.InchesToPoints(0.5)
}
```


```JavaScript
/*此示例显示活动工作表页眉边距。*/
function test() {
    alert(`页眉边距为 ${ActiveSheet.PageSetup.HeaderMargin} 磅`)
}
```
