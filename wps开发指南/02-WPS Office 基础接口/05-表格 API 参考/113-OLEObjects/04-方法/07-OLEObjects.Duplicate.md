# OLEObjects.Duplicate

复制对象，并返回对新复制对象的引用。



## 语法

express.**Duplicate()**

express   一个代表 **OLEObjects** 对象的变量。

## 返回值

Object

## 示例


```JavaScript
/*此示例复制第一张工作表中的所有 OLE 对象。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects().Duplicate()
}
```


```JavaScript
/*此示例复制活动工作表中的所有 OLE 对象，并选中新复制对象。*/
function test() {
    ActiveSheet.OLEObjects().Duplicate().Select()
}
```
