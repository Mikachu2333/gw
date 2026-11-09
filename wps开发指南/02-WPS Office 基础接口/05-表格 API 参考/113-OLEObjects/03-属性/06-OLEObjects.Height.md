# OLEObjects.Height

返回或设置一个 **Double** 值，它代表对象的高度（以磅为单位）。



## 语法

express.**Height**

express   一个代表 **OLEObjects** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例显示活动工作表中所有 OLE 对象的高度。*/
function test() {
    alert(ActiveSheet.OLEObjects().Height)
}
```


```JavaScript
/*此示例将第一张工作表中所有 OLE 对象高度设置为45磅。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects().Height = 45
}
```
