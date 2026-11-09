# OLEObject.Width

返回或设置一个 **Double** 值，它代表对象的宽度（以磅为单位）。



## 语法

express.**Width**

express   一个代表 **OLEObject** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例将第一张工作表中的第一个 OLE 对象宽度设置为300磅。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(1).Width = 300
}
```


```JavaScript
/*此示例显示活动工作表中的第二个 OLE 对象的宽度。*/
function test() {
    alert(ActiveSheet.OLEObjects(2).Width)
}
```
