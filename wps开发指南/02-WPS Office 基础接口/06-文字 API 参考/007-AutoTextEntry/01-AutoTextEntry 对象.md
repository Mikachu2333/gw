# AutoTextEntry 对象

代表单个“自动图文集”条目。 **AutoTextEntry** 对象是 **AutoTextEntries** 集合的成员。 **[AutoTextEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoTextEntries/obj)** 集合包含指定模板中的所有“自动图文集”条目。这些条目列在 **“自动更正”** 对话框的 **“自动图文集”** 选项卡上。

## 说明


可以使用 **[AutoTextEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoTextEntries/member/Item)** (index) 返回单个 **AutoTextEntry** 对象（其中 index 是“自动图文集”条目的名称或索引编号）。名称拼写必须和 **“自动更正”** 对话框中 **“自动图文集”** 选项卡上显示的完全一样（但大小写可以不一样）。

使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoTextEntries/member/Add)** 方法将 **AutoTextEntry** 对象添加到 **AutoTextEntries** 集合。


## 示例


```JavaScript
/*本示例设置名为“Test2”的现有“自动图文集”条目的值。*/
function test() {
    Application.NormalTemplate.AutoTextEntries.Item("Test2").Value = "The Johnson Company"
}
```


```JavaScript
/*本示例显示附加到活动文档的模板中的第一个“自动图文集”条目的名称和值。*/
function test() {
    let template = ActiveDocument.AttachedTemplate
    alert("Name =" + template.AutoTextEntries.Item(1).Name + "\n" + "Value = " + template.AutoTextEntries.Item(1).Value)
}
```


```JavaScript
/*本示例在插入点插入名为“Test2”的共用“自动图文集”条目。*/
function test() {
    Selection.Collapse(wdCollapseEnd)
    NormalTemplate.AutoTextEntries.Item("Test2").Insert(Selection.Range)
}
```


```JavaScript
/*本示例根据选定内容的文字添加一个名为“Blue”的“自动图文集”条目，并显示该条目的值。*/
function test() {
    let autoTextEntry = NormalTemplate.AutoTextEntries.Add("Blue", Selection.Range)
    alert(autoTextEntry.Value)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoTextEntry/member/Delete) | 删除指定的对象。 |
| [Insert](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoTextEntry/member/Insert) | 在指定区域内的位置插入“自动图文集”词条，返回代表“自动图文集”词条的 **Range** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoTextEntry/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoTextEntry/member/Name) | 返回或设置指定对象的名称。 **String** 类型，可读写。 |
| [StyleName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoTextEntry/member/StyleName) | 返回应用于指定的“自动图文集”词条的样式名称。 **String** 类型，只读。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoTextEntry/member/Value) | 返回或设置“自动图文集”词条的值。 **String** 类型，可读写。 |