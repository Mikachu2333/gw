# PageSetup.RightMargin

以磅为单位返回或设置右边距的大小。 **Double** 类型，可读写。



## 语法

express.**RightMargin**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（double 精度）

## 说明


边距的设置和返回均以磅为单位。可使用 **InchesToPoints** 方法进行英寸到磅值的转换，也可使用 **CentimetersToPoints** 方法进行厘米到磅值的转换。



## 示例


```JavaScript
/*本示例将 Sheet1 的右边距设置为 1.5 英寸。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.RightMargin = Application.InchesToPoints(1.5)
}
```


```JavaScript
/*本示例将 Sheet1 的右边距设置为 2 厘米。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.RightMargin = Application.CentimetersToPoints(2)
}
```


```JavaScript
/*本示例显示 Sheet1 中右边距的当前设置。*/
function test() {
    let marginInches = Application.Worksheets.Item("Sheet1").PageSetup.RightMargin / Application.InchesToPoints(1)
    alert(`The current right margin is ${marginInches} inches`)
}
```
