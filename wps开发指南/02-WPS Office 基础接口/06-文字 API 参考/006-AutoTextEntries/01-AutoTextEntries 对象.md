# AutoTextEntries 对象

代表模板中的“自动图文集”条目的 **[AutoCorrectEntry](#TODO)** 对象的集合。 **AutoTextEntries** 集合中包括 **“自动更正”** 对话框的 **“自动图文集”** 选项卡上列出的所有条目。

## 说明


使用 **AutoTextEntries** 属性可返回 **AutoTextEntries** 集合。

使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoTextEntries/member/Add)** 方法将一个“自动图文集”条目添加到 **AutoTextEntries** 集合中。

可以使用 **AutoTextEntries** (index) 返回单个 **AutoTextEntry** 对象（其中 index 是“自动图文集”条目的名称或索引编号）。名称拼写必须和 **“自动更正”** 对话框中 **“自动图文集”** 选项卡上显示的完全一样（但大小写可以不一样）。


## 示例


```JavaScript
/*本示例判断如果名为“blue”的 AutoTextEntry 对象位于 AutoTextEntries 集合中，则通知用户。*/
function test() {
    let autoTextEntries = NormalTemplate.AutoTextEntries
    for (let i = 1; i <= autoTextEntries.Count; i++) {
        if (autoTextEntries.Item(i).Name.toLowerCase() == "blue") {
            alert("AutoText entry exists")
        }
    }
}
```


```JavaScript
/*本示例根据选定内容的文字添加一个名为“Blue”的“自动图文集”条目。*/
function test() {
    Application.NormalTemplate.AutoTextEntries.Add("Blue", Selection.Range)
}
```


```JavaScript
/*本示例设置名为“图文场”的现有“自动图文集”条目的值。*/
function test() {
    Application.NormalTemplate.AutoTextEntries.Item("图文场").Value = "The Johnson Company"
}
```


```JavaScript
/*本示例显示附加到活动文档的模板中的第一个“自动图文集”条目的名称和值。*/
function test() {
    let template = ActiveDocument.AttachedTemplate
    alert("Name =" + template.AutoTextEntries.Item(1).Name + "\n" + "Value = " + template.AutoTextEntries.Item(1).Value)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoTextEntries/member/Add) | 返回一个 **AutoTextEntry** 对象，该对象代表添加到可用的“自动图文集”词条列表中的“自动图文集”词条。 |
| [AppendToSpike](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoTextEntries/member/AppendToSpike) | 删除指定的区域并将该区域的内容添至图文场（一个内置的“自动图文集”词条）。此方法将图文场作为一个 **AutoTextEntry** 对象返回。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoTextEntries/member/Item) | 返回集合中的单个 **AutoTextEntry** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoTextEntries/member/Count) | 返回 **[AutoTextEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoTextEntries/obj)** 集合中的项目数。 **Long** 类型，只读。 |