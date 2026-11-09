# ControlFormat 对象

包含 ET 控件 （ET 控件：ET 本身具有的控件，而不是 ActiveX 控件。）属性。

使用 **[ControlFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/ControlFormat)** 属性可返回 **ControlFormat** 对象。

如果指定的形状不是控件，则 **ControlFormat** 属性失效；并且如果该控件不是列表框，则 **ListFillRange** 属性失效。


## 示例


```JavaScript
/*下例为第一张工作表上的列表框控件设置填充区域。*/
function test() {
    Worksheets.Item(1).Shapes.Item(1).ControlFormat.ListFillRange = "A1:A10"
}
```


```JavaScript
/*本示例删除活动工作表上第二个形状（组合框）的所有数据项。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    shape.ControlFormat.RemoveAllItems()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/AddItem) | 为列表框或组合框添加项。 |
| [RemoveAllItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/RemoveAllItems) | 删除 ET 列表框或组合框中的所有数据项。 |
| [RemoveItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/RemoveItem) | 从列表框或组合框中删除一个或多个数据项。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [DropDownLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/DropDownLines) | 返回或设置组合框中下拉区域中显示的列表行的数目。 **Long** 类型，可读写。 |
| [Enabled](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/Enabled) | 如果启用对象，则为 **True** 。 **Boolean** 类型，可读写。 |
| [LargeChange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/LargeChange) | 滚动一页时，返回或设置滚动框增加或减少的量（当用户单击滚动条时）。 **Long** 类型，可读写。 |
| [LinkedCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/LinkedCell) | 返回或设置指向控制值的工作表区域。如果为这些单元格赋值，则指定控制也会取得相应的值。与此类似，如果更改控制的值，则单元格的值也作相应变动。 **String** 型，可读写。 |
| [ListCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/ListCount) | 返回列表框或者组合框中数据项的数目。如果列表中没有数据项，则返回 0（零）。 **Long** 类型，只读。 |
| [ListFillRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/ListFillRange) | 返回或设置用于填充指定列表框的工作表区域。对该属性进行设置将破坏列表框中的所有列表项。 **String** 型，可读写。 |
| [ListIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/ListIndex) | 返回或设置列表框或组合框中当前选定项的索引号。 **Long** 类型，可读写。 |
| [LockedText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/LockedText) | 当工作簿受保护时，指定对象中的文字是否被锁定以免发生更改，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Max](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/Max) | 返回或设置滚动条或微调控制项区域的最大值。滚动条或微调控制项的值不会超过指定的最大值。可读写 **Long** 类型。 |
| [Min](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/Min) | 返回或设置滚动条或微调控制项区域的最小值。滚动条或微调控制项的值不会小于指定的最小值。可读写 **Long** 类型。 |
| [MultiSelect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/MultiSelect) | 返回或设置指定列表框的选择模式。可为以下常量之一： **xlNone** 、 **xlSimple** 或 **xlExtended** 。 **Long** 类型，可读写。 |
| [PrintObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/PrintObject) | 如果打印文档时也打印指定对象，则为 **True** 。 **Boolean** 类型，可读写。 |
| [SmallChange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/SmallChange) | 返回或设置滚动条或微调框在滚动一行（当用户单击箭头）时的增量或减量。 **Long** 类型，可读写。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/Value) | 返回或设置一个 **Long** 值，它代表指定的控件格式的值。 |