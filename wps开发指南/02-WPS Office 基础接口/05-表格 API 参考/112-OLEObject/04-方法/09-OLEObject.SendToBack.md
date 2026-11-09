# OLEObject.SendToBack

将对象放到 z-次序的后面。



## 语法

express.**SendToBack()**

express   一个代表 **OLEObject** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例将第一张工作表中的第二个 OLE 对象放到 z-次序的后面。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(2).SendToBack()
}
```


```JavaScript
/*此示例将活动工作表中的第一个 OLE 对象放到 z-次序的后面。*/
function test() {
    ActiveSheet.OLEObjects(1).SendToBack()
}
```
