# OLEObject.Activate

激活对象。



## 语法

express.**Activate()**

express   一个代表 **OLEObject** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例将第一张工作表中的第一个 OLE 对象激活。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(1).Activate()
}
```


```JavaScript
/*此示例将活动工作表中的第二个 OLE 对象激活。*/
function test() {
    ActiveSheet.OLEObjects(2).Activate()
}
```
