# PageSetup.FooterMargin

以磅为单位返回或设置页脚到页面底端的距离。 **Double** 类型，可读写。



## 语法

express.**FooterMargin**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（double 精度）

## 说明


边距的设置和返回均以磅为单位。 使用 **InchesToPoints** 方法或 **CentimetersToPoints** 方法执行转换。



## 示例


```JavaScript
/*本示例将 Sheet1 的页脚边矩设置为 0.5 英寸。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.FooterMargin = Application.InchesToPoints(0.5)
}
```


```JavaScript
/*此示例显示活动工作表页脚边距。*/
function test() {
    alert("页脚边距为：" + ActiveSheet.PageSetup.FooterMargin + "磅")
}
```
