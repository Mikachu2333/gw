# CustomProperties 对象

 **[CustomProperty](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CustomProperty/obj)** 对象的集合，这些对象代表与智能标记相关的属性。 **CustomProperties** 集合包括文档中的所有智能标记自定义属性。

## 说明


使用 **Properties** 属性可返回单个 **CustomProperties** 对象。使用 **CustomProperties** 对象的 **Add** 方法，可以创建自定义属性。

使用 **Properties** (Index) 返回智能标记的单个属性，其中 Index 是属性的索引号。

使用 **Count** 属性可返回智能标记的自定义属性数。


## 示例


```JavaScript
/*本示例创建活动文档中第一个智能标记的新属性，并显示用于该标记的 XML 代码。*/
function test() {
    let smartTag = ActiveDocument.SmartTags.Item(1)
    smartTag.Properties.Add("President", true)
    alert("The XML code is " + smartTag.XML)
}
```


```JavaScript
/*本示例显示活动文档上第一个智能标记的第一个自定义属性的名称和属性。*/
function test() {
    let customProperty = ActiveDocument.SmartTags.Item(1).Properties.Item(1)
    alert("The Smart Tag name is: " + customProperty.Name + "\n" + "The Smart Tag value is: " + customProperty.Value)
}
```


```JavaScript
/*本示例循环访问当前文档中的所有智能标记，然后在新文档中列出具有自定义属性的所有智能标记的自定义属性的名称和值。*/
function test() {
    let document = Documents.Add()

    //Create heading info in new document
    let range = document.Content
    range.InsertAfter("Name" + "\t" + "Value")
    range.InsertParagraphAfter()

    //Loop through smart tags in current document
    for (let i = 1; i <= ActiveDocument.SmartTags.Count; i++) {
        let smartTag = ActiveDocument.SmartTags.Item(i)

        //Verify that the custom properties for smart tags is greater than zero
        if (smartTag.Properties.Count > 0) {
            //Loop through the custom properties
            for (let j = 1; j <= smartTag.Properties.Count; j++) {
                //Add custom property name to new document
                document.Content.InsertAfter(smartTag.Properties.Item(j).Name + "\t" + smartTag.Properties.Item(j).Value)
                document.Content.InsertParagraphAfter()
            }
        } else {
            //Display message if there are no custom properties
            alert("There are no custom properties for the smart tags in your document.")
        }
    }

    //Convert the content in the new document into a table
    document.Content.Select()
    Selection.ConvertToTable(wdSeparateByTabs, 2)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CustomProperties/member/Add) | 返回一个 **CustomProperty** 对象，该对象代表添加到智能标记的自定义属性。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CustomProperties/member/Item) | 返回集合中的一个 **CustomProperty** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CustomProperties/member/Application) | 返回一个代表 WPS 应用程序的 [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj) 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CustomProperties/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中的项目数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CustomProperties/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CustomProperties/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **CustomProperties** 对象的父对象。 |