# OLEObject.BringToFront

将对象放到 z-次序前面。



## 语法

express.**BringToFront()**

express   一个代表 **OLEObject** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例将第一张工作表中的第二个 OLE 对象放到 z-次序的前面。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(2).BringToFront()
}
```


```JavaScript
/*此示例将活动工作表中的第一个 OLE 对象放到 z-次序的前面。*/
function test() {
    ActiveSheet.OLEObjects(1).BringToFront()
}
```
