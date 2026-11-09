# OLEObjects.BringToFront

将对象放到 z-次序前面。



## 语法

express.**BringToFront()**

express   一个代表 **OLEObjects** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例将工作表 Sheet1 中的所有 OLE 对象放到 z-次序的前面。*/
function test() {
    Application.Worksheets.Item("Sheet1").OLEObjects().BringToFront()
}
```


```JavaScript
/*此示例将活动工作表的所有 OLE 对象放到 z-次序的前面。*/
function test() {
    ActiveSheet.OLEObjects().BringToFront()
}
```
