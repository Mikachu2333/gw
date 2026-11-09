# SectionProperties 对象

包含用于在演示文稿中管理节的属性和方法。

## 说明


可以使用 **Presentation** 对象的 **SectionProperties** 属性获取 **SectionProperties** 对象。


## 示例


```JavaScript
/*本示例在活动演示文稿末尾位置添加一个名为“test”的新节。*/
function test() {
    let properties = ActivePresentation.SectionProperties
    properties.AddSection(properties.Count + 1, "test")
}
```


```JavaScript
/*本示例显示第一篇演示文稿中第二个节的唯一标识符。*/
function test() {
    let properties = Presentations.Item(1).SectionProperties
    alert(properties.SectionID(2))
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddBeforeSlide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SectionProperties/member/AddBeforeSlide) | 在紧挨指定幻灯片索引的前面添加一节，并返回新节的索引。 |
| [AddSection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SectionProperties/member/AddSection) | 在指定索引位置添加新节并返回新建节的索引。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SectionProperties/member/Delete) | 删除分隔指定节的分节符，也可以选择删除该节中的所有幻灯片。 |
| [FirstSlide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SectionProperties/member/FirstSlide) | 返回指定节中第一张幻灯片的索引，如果该节为空，则返回 -1。 |
| [Move](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SectionProperties/member/Move) | 将指定节移动到指定的索引位置，移动时将该节中的幻灯片与分节符一起移动。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SectionProperties/member/Name) | 以 **String** 类型返回指定节的名称。 |
| [Rename](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SectionProperties/member/Rename) | 用指定的名称重命名指定的节。 |
| [SectionID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SectionProperties/member/SectionID) | 返回一个字符串，代表指定节的唯一标识符。 |
| [SlidesCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SectionProperties/member/SlidesCount) | 返回指定节中幻灯片的数量。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SectionProperties/member/Count) | 返回指定集合中的对象数目。只读。 |