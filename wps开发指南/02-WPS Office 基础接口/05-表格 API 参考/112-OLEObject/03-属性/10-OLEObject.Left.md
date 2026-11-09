# OLEObject.Left

返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。



## 语法

express.**Left**

express   一个代表 **OLEObject** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例将第一张工作表中的第一个 OLE 对象左边缘到工作表的 A 列左边缘的距离设置为15磅。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(1).Left = 15
}
```


```JavaScript
/*此示例显示活动工作表中的第二个 OLE 对象左边缘到工作表的 A 列左边缘的距离。*/
function test() {
    alert(ActiveSheet.OLEObjects(2).Left)
}
```
