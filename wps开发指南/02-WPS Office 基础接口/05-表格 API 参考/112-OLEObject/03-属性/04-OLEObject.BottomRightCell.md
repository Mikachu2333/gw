# OLEObject.BottomRightCell

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表位于该对象右下角下方的单元格。只读。



## 语法

express.**BottomRightCell**

express   一个代表 **OLEObject** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*此示例将第一张工作表中的第一个 OLE 对象右下角下方的单元格的数据清除。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(1).BottomRightCell.Clear()
}
```


```JavaScript
/*此示例显示活动工作表中的第二个 OLE 对象右下角下方的单元格值。*/
function test() {
    alert(ActiveSheet.OLEObjects(2).BottomRightCell.Value2)
}
```
