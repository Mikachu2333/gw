# OLEObject.Duplicate

复制对象，并返回对新复制对象的引用。



## 语法

express.**Duplicate()**

express   一个代表 **OLEObject** 对象的变量。

## 返回值

Object

## 示例


```JavaScript
/*此示例复制第一张工作表中的第一个 OLE 对象。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects().Item(1).Duplicate()
}
```


```JavaScript
/*此示例复制活动工作表中的第二个 OLE 对象，并将复制对象的宽度和高度都扩大至原来的两倍。*/
function test() {
    let duplicate = ActiveSheet.OLEObjects().Item(2).Duplicate()
    duplicate.Width *= 2
    duplicate.Height *= 2
}
```
