# PageSetup.LeftMargin

以磅为单位返回或设置左边距的大小。 **Double** 类型，可读写。



## 语法

express.**LeftMargin**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（double 精度）

## 说明


边距的设置和返回均以磅为单位。可使用 **InchesToPoints** 方法进行英寸到磅值的转换，也可使用 **CentimetersToPoints** 方法进行厘米到磅值的转换。



## 示例


```JavaScript
/*本示例将 Sheet1 的左页边距设置为 2 厘米。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.LeftMargin = Application.CentimetersToPoints(2)
}
```


```JavaScript
/*本示例显示 Sheet1 的左边距的当前设定值。*/
function test() {
    let marginInches = Application.Worksheets.Item("Sheet1").PageSetup.LeftMargin / Application.InchesToPoints(1)
    alert(`The current left margin is ${marginInches} inches`)
}
```


```JavaScript
/*本示例将 Sheet1 的左边距设置为 1.5 英寸。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.LeftMargin = Application.InchesToPoints(1.5)
}
```
