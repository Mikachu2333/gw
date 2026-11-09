# Sentences 对象

[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj) 对象的集合，这些对象代表选定内容、区域或文档中的所有句子。不存在 **Sentence** 对象。

## 说明


使用 **Sentences** 属性返回 **Sentences** 集合。


## 示例


```JavaScript
/*本示例显示选定部分的句数。*/
function test() {
    alert(Selection.Sentences.Count + " sentences are selected")
}
```
使用 **Sentences** (Index)（其中 Index 是索引号）返回表示句子的 **Range** 对象。索引号表示句子在 **Sentences** 集合中的位置。



```JavaScript
/*本示例设置活动文档中的第一个句子。*/
function test() {
    let sentence = ActiveDocument.Sentences.Item(1)
    sentence.Bold = true
    sentence.Font.Size = 24
}
```
文档中此集合的 **Count** 属性仅返回正文部分的项目数。 要统计其他部分中的个数，请使用带有 **Range** 对象的集合。

Add 方法不可用于 **Sentences** 集合。请改用 **InsertAfter** 或 **InsertBefore** 方法将句子添加到 **Range** 对象。



```JavaScript
/*本示例在活动文档中的第一个句子后面插入一个句子。*/
function test() {
    ActiveDocument.Sentences.Item(1).InsertAfter("The house is blue.")
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sentences/member/Item) | 返回集合中的单个 **Range** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sentences/member/Application) | 返回一个代表 WPS 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sentences/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中句子的数量。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sentences/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [First](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sentences/member/First) | 返回一个 [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj) 对象，该对象代表文档、区域或选定内容中的句子集合中的第一个句子。 |
| [Last](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sentences/member/Last) | 返回一个 **Range** 对象，该对象代表文档、所选内容或范围中的最后一句。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sentences/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Sentences** 对象的父对象。 |