# OLEObject.LinkedCell

返回或设置指向控制值的工作表区域。如果为这些单元格赋值，则指定控制也会取得相应的值。与此类似，如果更改控制的值，则单元格的值也作相应变动。 **String** 型，可读写。



## 语法

express.**LinkedCell**

express   一个代表 **OLEObject** 对象的变量。

## 类型

string

## 说明


不能将该属性应用于多选列表框。



## 示例


```JavaScript
/*此示例为第一张工作表中的第二个 OLE 对象设置链接的单元格。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(2).LinkedCell = "E1"
}
```


```JavaScript
/*此示例显示活动工作表中的第一个 OLE 对象链接的单元格。*/
function test() {
    alert(ActiveSheet.OLEObjects(1).LinkedCell)
}
```
