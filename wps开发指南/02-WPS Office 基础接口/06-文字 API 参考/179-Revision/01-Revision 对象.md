# Revision 对象

代表由修订标记所标记的修改。 **Revision** 对象是 **Revisions** 集合的一个成员。 **Revisions** 集合包含某范围或文档中的所有修订标记。

## 说明


使用 **Revisions** (Index)（其中 Index 是索引号）可返回单个 **Revision** 对象。索引号表示修订版本在范围或文档中的位置。


## 示例


```JavaScript
/*本示例显示活动文档上第一节中第一处修订的作者姓名。*/
function test() {
    alert(ActiveDocument.Sections.Item(1).Range.Revisions.Item(1).Author)
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

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Accept](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Revision/member/Accept) | 接受指定修订、删除修订标记并将更改合并到文档中。 |
| [Reject](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Revision/member/Reject) | 拒绝接受指定的修订。将删除修订标记，不改变原文 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Revision/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Author](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Revision/member/Author) | 返回指定的修订的用户的名称。只读 **String** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Revision/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Date](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Revision/member/Date) | 返回完成指定修订的日期和时间， **Data** 类型，只读。 |
| [FormatDescription](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Revision/member/FormatDescription) | 返回一个 **String** 类型的值，该值代表对修订中所作格式更改的说明。只读。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Revision/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Revision/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Revision** 对象的父对象。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Revision/member/Range) | 返回一个 **Range** 对象，该对象代表修订标记内包含的文档部分。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Revision/member/Type) | 返回修订的类型。只读 **WdRevisionType** 类型。 |