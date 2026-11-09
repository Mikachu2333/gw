# DropDown 对象

代表包含一个窗体选项列表的下拉型窗体域。

## 说明


使用 **FormFields** (_index_) 返回单个 **FormField** 对象（其中 _index_ 是与下拉型窗体域相关的索引编号或书签名称）。可将 **DropDown** 属性与 **FormField** 对象配合使用，返回 **DropDown** 的对象。


## 示例


```JavaScript
/*本示例在活动文档中名为“DropDown1”的下拉型窗体域中选定第一个项目。*/
function test() {
    ActiveDocument.FormFields.Item("DropDown1").DropDown.Value = 1
}
```
索引编号代表窗体域在 **FormFields** 集合中的位置。



```JavaScript
/*本示例判断如果活动文档的第一个窗体域的类型为下拉型窗体域，则选中该窗体域的第二项。*/
function test() {
    let formField = ActiveDocument.FormFields.Item(1)
    if (formField.Type == wdFieldFormDropDown) {
        formField.DropDown.Value = 2
    }
}
```


```JavaScript
/*本示例在向活动文档上第一个下拉型窗体域添加项目之前判断其是否为有效的下拉型窗体域。*/
function test() {
    let dropDown = ActiveDocument.FormFields.Item(1).DropDown
    if (dropDown.Valid) {
        dropDown.ListEntries.Add("Hello")
    } else {
        alert("First field is not a drop down")
    }
}
```
可将 **Add** 方法用于 **FormFields** 集合来添加下拉型窗体域。



```JavaScript
/*本示例在活动文档的开头添加一个下拉型窗体域，然后将项目添加到窗体字段。*/
function test() {
    let formField = ActiveDocument.FormFields.Add(ActiveDocument.Range(0, 0), wdFieldFormDropDown)
    formField.Name = "Colors"
    formField.DropDown.ListEntries
    formField.DropDown.ListEntries.Add("Blue")
    formField.DropDown.ListEntries.Add("Green")
    formField.DropDown.ListEntries.Add("Red")
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropDown/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropDown/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Default](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropDown/member/Default) | 返回或设置一个 **Long** 类型值，该值代表默认的下拉型项目。可读写。 |
| [ListEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropDown/member/ListEntries) | 返回一个 **ListEntries** 集合，该集合代表 **DropDown** 对象中所有项。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropDown/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **DropDown** 对象的父对象。 |
| [Valid](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropDown/member/Valid) | 如果指定的窗体域对象为有效的下拉型窗体域，则该属性为 **True** 。 **Boolean** 类型，只读。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropDown/member/Value) | 返回或设置下拉型窗体域中所选项目的编号。可读写 **Long** 类型。 |