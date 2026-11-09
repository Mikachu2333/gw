# Documents 对象

当前在 WPS 中打开的所有 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 对象的集合。

## 说明


使用 **Documents** 属性返回 **Documents** 集合。


## 示例


```JavaScript
/*本示例显示所有已打开的文档的名称。*/
function test() {
    let nameStr = ""
    for (let i = 1; i <= Documents.Count; i++) {
        nameStr += Documents.Item(i).Name + "\n"
    }
    alert(nameStr)
}
```
使用 **Add** 方法创建新的空文档并将其添加到 **Documents** 集合。



```JavaScript
/*本示例基于 Normal 模板新建一篇文档。*/
function test() {
    Documents.Add()
}
```
使用 **Open** 方法打开文件。



```JavaScript
/*本示例打开文档 example.docx。*/
function test() {
    Application.Documents.Open("D:\\example.docx")
}
```
使用 **Documents** (Index)，其中 Index 是文档名称或索引号，可返回单个 **Document** 对象。



```JavaScript
/*本示例关闭第一个文档且不保存待定的更改。*/
function test() {
    Documents.Item(1).Close(wdDoNotSaveChanges)
}
```
索引编号代表文档在 **Documents** 集合中的位置。



```JavaScript
/*本示例激活第一个文档。*/
function test() {
    Documents.Item(1).Activate()
}
```


```JavaScript
/*本示例遍历 Documents 集合，以确定名为“example.docx”的文档是否打开，如果此文档包含在 Documents 集合中，则激活该文档；否则，它将打开。*/
function test() {
    let found = false
    for (let i = 1; i <= Documents.Count; i++) {
        if (Documents.Item(i).Name == "example.docx") {
            found = true
        }
    }
    if (!found) {
        Documents.Open("D:\\示例\\example.docx")
    } else {
        Documents.Item("example.docx").Activate()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Documents/member/Add) | 返回一个 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 对象，该对象代表添加到打开文档集合中的新建空文档。 |
| [CanCheckOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Documents/member/CanCheckOut) | 如果该属性值为 **True** ，则 WPS 可将指定的文档从服务器签出。可读/写 **Boolean** 类型。 |
| [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Documents/member/Close) | 关闭指定的文档。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Documents/member/Item) | 返回集合中的单个 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 对象。 |
| [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Documents/member/Open) | 打开指定的文档并将其添加到 **Documents** 集合。返回一个 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 对象。 |
| [OpenNoRepairDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Documents/member/OpenNoRepairDialog) | 打开指定的文档并将其添加到 **Documents** 集合。 |
| [Save](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Documents/member/Save) | 保存 **Documents** 集合中的所有文档。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Documents/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Documents/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中的文档数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Documents/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Documents/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Documents** 对象的父对象。 |