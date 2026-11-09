# OLEObject.Cut

将对象剪切到剪贴板，或者将其粘贴到指定的目的地。



## 语法

express.**Cut()**

express   一个代表 **OLEObject** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例将第一张工作表中的第一个 OLE 对象剪切到剪贴板。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(1).Cut()
}
```


```JavaScript
/*此示例将活动工作表中的第二个 OLE 对象剪切到剪贴板。*/
function test() {
    ActiveSheet.OLEObjects(2).Cut()
}
```
