# PublishObjects 对象

工作簿中所有 **[PublishObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObject/obj)** 对象的集合。

## 说明


每个 **PublishObject** 对象都代表保存为网页的工作簿中的某一项，并且还可以根据该对象中属性和方法所指定的值进行刷新。

使用 **[PublishObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/PublishObjects)** 属性可返回 **[PublishObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObjects/obj)** 集合。


## 示例


```JavaScript
/*本示例在活动工作簿中创建新的 PublishObject 对象，并将活动工作簿中的所有静态 PublishObject 对象保存到网页。*/
function test() {
    let publishObjs = Application.ActiveWorkbook.PublishObjects
    publishObjs.Add(xlSourceRange, "D:\\示例1\\example.html", "Sheet1", "$A$1:$A$10", xlHtmlStatic, "example_test")
    for (let i = 1; i <= publishObjs.Count; i++) {
        if (publishObjs.Item(i).xlHtmlType == xlHtmlStatic) {
            publishObjs.Item(i).Publish()
        }
    }
}
```
使用 **PublishObjects** (_index_)（其中 _index_ 是工作簿中指定项的索引号）可返回一个 **PublishObject** 对象。



```JavaScript
/*本示例设置第一张工作簿中第一个项的保存位置。本示例假定已经创建PublishObject对象。*/
function test() {
    Workbooks.Item(1).PublishObjects.Item(1).Filename = "D:\\example1.html"
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObjects/member/Add) | 创建一个对象，该对象代表保存在网页上的文档中的项目。当对 ET 中的文档进行了一些自动修订时，这些对象可帮助随后对网页进行的更新。返回 **PublishObject** 对象。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObjects/member/Delete) | 删除对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObjects/member/Item) | 从集合中返回一个对象。 |
| [Publish](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObjects/member/Publish) | 将电子表格中已添加到 PublishObjects 集合的项目的副本保存到网页。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObjects/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |