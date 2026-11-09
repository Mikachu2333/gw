# OLEObject.ListFillRange

返回或设置用于填充指定列表框的工作表区域。对该属性进行设置将破坏列表框中的所有列表项。 **String** 型，可读写。



## 语法

express.**ListFillRange**

express   一个代表 **OLEObject** 对象的变量。

## 类型

string

## 说明


ET 阅读区域中的每一单元格的内容，并将单元格值插入到列表框中。列表对该区域中单元格的修订进行追踪。

如果列表框中的列表是使用 **ControlFormat** 对象的 **[AddItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/AddItem)** 方法创建的，则此属性返回一个空字符串 ("")。



## 示例


```JavaScript
/*此示例显示活动工作表中的第二个 OLE 对象的填充区域。*/
function test() {
    alert(ActiveSheet.OLEObjects(2).ListFillRange)
}
```


```JavaScript
/*此示例为第一张工作表中的第一个 OLE 对象设置填充区域。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(1).ListFillRange = "C1:C5"
}
```
