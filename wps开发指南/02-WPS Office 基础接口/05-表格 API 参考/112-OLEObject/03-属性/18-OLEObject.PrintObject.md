# OLEObject.PrintObject

如果打印文档时也打印指定对象，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PrintObject**

express   一个代表 **OLEObject** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例设置第一张工作表中的第一个 OLE 对象在打印文档时不打印该对象。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(1).PrintObject = false
}
```


```JavaScript
/*此示例显示在打印文档时活动工作表中的第二个 OLE 对象是否打印。*/
function test() {
    alert(ActiveSheet.OLEObjects(2).PrintObject == true)
}
```
