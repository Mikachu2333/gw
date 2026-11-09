# OLEObjects.Width

返回或设置一个 **Double** 值，它代表对象的宽度（以磅为单位）。



## 语法

express.**Width**

express   一个代表 **OLEObjects** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例将第一张工作表中所有 OLE 对象宽度设置为300磅。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects().Width = 300
}
```


```JavaScript
/*此示例显示活动工作表中所有 OLE 对象的宽度是否大于200磅。*/
function test() {
    alert(ActiveSheet.OLEObjects().Width > 200)
}
```
