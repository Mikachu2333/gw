# Endnote 对象

代表一个尾注。 **Endnote** 对象是 **Endnotes** 集合的一个成员，该集合代表所选内容、范围或文档的尾注。

## 说明


使用 **Endnotes** (*Index*) 可返回一个 **Endnote** 对象，其中 *Index* 是索引号。索引号代表尾注在所选内容、范围或文档中的位置。


## 示例


```JavaScript
/*本示例将所选内容中第一个尾注的引用标记的字体颜色设置为红色。*/
function test() {
    if (Application.Selection.Endnotes.Count >= 1) {
        Application.Selection.Endnotes.Item(1).Reference.Font.ColorIndex = wdRed
    }
}
```
使用 **Add** 方法可向 **Endnotes** 集合添加尾注。



```JavaScript
/*本示例为所选内容添加尾注，并设置该尾注的引用标记的字体颜色和下划线类型。*/
function test() {
    Application.Selection.Collapse(wdCollapseEnd)
    let endnote = Application.ActiveDocument.Endnotes.Add(Selection.Range, null, "The Willow Tree, (Lone Creek Press, 1996).")
    endnote.Reference.Font.ColorIndex = wdRed
    endnote.Reference.Underline = wdUnderlineDash
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnote/member/Delete) | 删除指定的尾注。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnote/member/Application) | 返回一个代表 WPS 应用程序的 [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj) 对象。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnote/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnote/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnote/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Endnote** 对象的父对象。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnote/member/Range) | 返回一个 **Range** 对象，该对象表示指定对象中包含的文档部分。 |
| [Reference](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnote/member/Reference) | 返回 **Range** 对象，该对象表示尾注引用标记。 |