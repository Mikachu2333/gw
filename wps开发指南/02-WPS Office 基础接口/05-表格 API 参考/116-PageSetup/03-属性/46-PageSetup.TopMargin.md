# PageSetup.TopMargin

以磅为单位返回或设置上边距的大小。 **Double** 类型，可读写。



## 语法

express.**TopMargin**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（double 精度）

## 说明


边距的设置和返回均以磅为单位。可使用 **InchesToPoints** 方法进行英寸到磅值的转换，也可使用 **CentimetersToPoints** 方法进行厘米到磅值的转换。



## 示例


```JavaScript
/*本示例将 Sheet1 的上边距设置为 0.5 英寸（36 磅）*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.TopMargin = Application.InchesToPoints(0.5)
    Application.Worksheets.Item("Sheet1").PageSetup.TopMargin = 36
}
```


```JavaScript
/*本示例显示活动工作表上边距的当前设置值。*/
function test() {
    let marginInches = Application.ActiveSheet.PageSetup.TopMargin / Application.InchesToPoints(1)
    alert(`The current right margin is ${marginInches} inches`)
}
```
