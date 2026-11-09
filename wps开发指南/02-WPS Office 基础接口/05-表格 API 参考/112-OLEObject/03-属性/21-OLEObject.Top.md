# OLEObject.Top

返回或设置一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。



## 语法

express.**Top**

express   一个代表 **OLEObject** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例将第一张工作表中的第一个 OLE 对象上边缘到工作表第一行顶部的距离设置为10磅。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(1).Top = 10
}
```


```JavaScript
/*此示例显示活动工作表中的第二个 OLE 对象上边缘到工作表第一行顶部的距离。*/
function test() {
    alert(ActiveSheet.OLEObjects(2).Top)
}
```
