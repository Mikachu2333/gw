# ControlFormat.ListFillRange

返回或设置用于填充指定列表框的工作表区域。对该属性进行设置将破坏列表框中的所有列表项。 **String** 型，可读写。



## 语法

express.**ListFillRange**

express   一个代表 **ControlFormat** 对象的变量。

## 类型

string

## 说明


ET 阅读区域中的每一单元格的内容，并将单元格值插入到列表框中。列表对该区域中单元格的修订进行追踪。

如果列表框中的列表是使用 **[AddItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/AddItem)** 方法创建的，则此属性返回一个空字符串 ("")。



## 示例


```JavaScript
/*本示例将列表框添加到第一张工作表中，并为该列表框设置填充区域。*/
function test() {
    let worksheet = Worksheets.Item(1)
    let shape = worksheet.Shapes.AddFormControl(xlListBox, 100, 10, 100, 100)
    shape.ControlFormat.ListFillRange = "A1:A10"
}
```


```JavaScript
/*本示例显示活动工作表的第一个形状（列表框）的填充区域。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(1)
    alert(shape.ControlFormat.ListFillRange)
}
```
