# OLEObject.Name

返回或设置一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **OLEObject** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例将第一张工作表中的第一个 OLE 对象名称设置为“对象1”。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(1).Name = "对象1"
}
```


```JavaScript
/*此示例显示活动工作表中的第二个 OLE 对象的名称。*/
function test() {
    alert(ActiveSheet.OLEObjects(2).Name)
}
```
