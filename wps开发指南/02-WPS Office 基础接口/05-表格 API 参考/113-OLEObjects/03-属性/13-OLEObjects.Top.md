# OLEObjects.Top

返回或设置一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。



## 语法

express.**Top**

express   一个代表 **OLEObjects** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例将第一张工作表中的所有 OLE 对象上边缘到工作表第一行顶部的距离设置为30磅。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects().Top = 30
}
```


```JavaScript
/*此示例显示活动工作表中所有 OLE 对象上边缘到工作表第一行顶部的距离。*/
function test() {
    alert(ActiveSheet.OLEObjects().Top)
}
```
