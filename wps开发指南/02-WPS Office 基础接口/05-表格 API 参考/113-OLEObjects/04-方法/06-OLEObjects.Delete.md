# OLEObjects.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **OLEObjects** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例将工作表 Sheet1 中的所有 OLE 对象删除。*/
function test() {
    Application.Worksheets.Item("Sheet1").OLEObjects().Delete()
}
```


```JavaScript
/*此示例将活动工作表的所有 OLE 对象删除。*/
function test() {
    ActiveSheet.OLEObjects().Delete()
}
```
