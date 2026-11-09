# OLEObjects.Enabled

如果启用对象，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Enabled**

express   一个代表 **OLEObjects** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例启用活动工作表中的所有 OLE 对象。*/
function test() {
    ActiveSheet.OLEObjects().Enabled = true
}
```


```JavaScript
/*此示例禁用第一张工作表中的所有 OLE 对象。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects().Enabled = false
}
```
