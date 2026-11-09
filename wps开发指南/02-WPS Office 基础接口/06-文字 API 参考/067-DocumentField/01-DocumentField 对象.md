# DocumentField 对象

代表文档中的一个公文域。


## 示例


```JavaScript
/*本示例显示第一个文档上第二个公文域是否只读。*/
function test() {
    let documentField = Documents.Item(1).DocumentFields.Item(2)
    alert(documentField.ReadOnly)
}
```


```JavaScript
/*本示例设置所选内容中第一个公文域的内容。*/
function test() {
    let documentField = Selection.DocumentFields.Item(1)
    documentField.Value = "example"
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentField/member/Delete) | 删除指定的公文域。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentField/member/Select) | 选择指定的域。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentField/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentField/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Hidden](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentField/member/Hidden) | 如果为 **True** ，则隐藏文档中的公文域。 **Boolean** 类型，可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentField/member/Name) | 返回或设置指定对象的名称。可读/写 **String** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentField/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **DocumentField** 对象的父对象。 |
| [PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentField/member/PrintOut) | 返回或设置公文域对象是否可以打印。可读写， **Boolean** 类型。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentField/member/Range) | 返回一个 **Range** 对象，该对象表示公文域的内容。 |
| [ReadOnly](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentField/member/ReadOnly) | 如果为 **True** ，代表该公文域值只读。 **Boolean** 类型，可读/写。 |
| [StoryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentField/member/StoryType) | 返回一个 **WdStoryType** 类型值，该值代表此公文域的类型。只读。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentField/member/Value) | 返回一个字符串，该字符串为此公文域中的内容。 **String** 类型，可读/写。 |