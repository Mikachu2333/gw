# Revisions 对象

 **Revision** 对象的集合，这些对象代表区域或文档中标有修订标记的更改。

## 说明


使用 **Revisions** 属性返回 **Revisions** 集合。


## 示例


```JavaScript
/*本示例显示活动文档的修订个数。*/
function test() {
    alert(ActiveDocument.Revisions.Count)
}
```


```JavaScript
/*本示例接受选定内容中的所有修订。*/
function test() {
    let revisions = Selection.Range.Revisions
    for (let i = revisions.Count; i >= 1; i--) {
        revisions.Item(i).Accept()
    }
}
```


```JavaScript
/*本示例接受所选内容的第一个段落中的所有修订。*/
function test() {
    let range = Selection.Paragraphs.Item(1).Range
    range.Revisions.AcceptAll()
}
```
 **Add** 方法不可用于 **Revisions** 集合。启用修订功能时，将添加 **Revision** 对象。将 **TrackRevisions** 属性设置为 **True** 以跟踪对文档文本所做的修订。



```JavaScript
/*本示例启用活动文档中跟踪更改，然后显示第一处修订的文本。*/
function test() {
    ActiveDocument.TrackRevisions = true
    alert(ActiveDocument.Revisions.Item(1).Range.Text)
}
```
使用 **Revisions** (Index)（其中 Index 是索引号）可返回单个 **Revision** 对象。索引号表示修订版本在范围或文档中的位置。



```JavaScript
/*本示例显示活动文档上第一节中第一处修订的作者姓名。*/
function test() {
    alert(ActiveDocument.Sections.Item(1).Range.Revisions.Item(1).Author)
}
```
文档中此集合的 **Count** 属性仅返回主要文章中的项目数。要对其他故事中的项目进行计数，请使用带有 **Range** 对象的集合。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AcceptAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Revisions/member/AcceptAll) | 接受文档或区域中的所有修订、删除所有修订标记并将更改合并到文档中。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Revisions/member/Item) | 返回集合中的单个 **Revision** 对象。 |
| [RejectAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Revisions/member/RejectAll) | 拒绝文档的修订集合。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Revisions/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中的修订数目。只读。 |