# DocumentFields 对象

代表一个公文域集合。 **DocumentField** 对象是 **DocumentFields** 集合的成员。 **DocumentFields** 集合中包含当前在 WPS 中打开的所有 **DocumentField** 对象。


## 示例


```JavaScript
/*本示例显示活动文档上所有公文域的名称和值。*/
function test() {
    let str = ""
    for (let i = 1; i <= ActiveDocument.DocumentFields.Count; i++) {
        let documentField = ActiveDocument.DocumentFields.Item(i)
        str += documentField.Name + "\t" + documentField.Value + "\n"
    }
    alert(str)
}
```


```JavaScript
/*本示例删除活动文档上所有公文域。*/
function test() {
    let documentFields = ActiveDocument.DocumentFields
    for (let i = documentFields.Count; i >= 1; i--) {
        documentFields.Item(i).Delete()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentFields/member/Add) | 新增公文域。 |
| [Exists](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentFields/member/Exists) | 判断指定的公文域是否存在。如果存在，则返回 **True** 。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentFields/member/Item) | 返回一个 **[DocumentField](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentField/obj)** 对象，该对象通过索引或公文域名称来确定。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentFields/member/Count) | 返回一个 **Long** 类型的值，代表该对象中 **DocumentField** 对象的数量，只读。 |
| [DefaultSorting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentFields/member/DefaultSorting) | 设置 **DocumentFields** 集合的排序方式，可以通过枚举值 **[WdDocumentFieldSortBy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdDocumentFieldSortBy)** 指定。可读/写 |
| [InsertionMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DocumentFields/member/InsertionMode) | 如果在公文域首尾位置进行插入，则为 **True** 。可读写， **Boolean** 类型。 |