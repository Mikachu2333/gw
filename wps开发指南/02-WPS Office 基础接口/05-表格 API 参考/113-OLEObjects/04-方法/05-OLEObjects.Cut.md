# OLEObjects.Cut

将对象剪切到剪贴板。



## 语法

express.**Cut()**

express   一个代表 **OLEObjects** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例将第一张工作表中的所有 OLE 对象剪切到剪贴板。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects().Cut()
}
```


```JavaScript
/*此示例将活动工作表中的所有 OLE 对象剪切到剪贴板。*/
function test() {
    ActiveSheet.OLEObjects().Cut()
}
```
