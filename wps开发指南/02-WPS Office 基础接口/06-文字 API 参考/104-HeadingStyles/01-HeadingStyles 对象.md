# HeadingStyles 对象

 **HeadingStyle** 对象的集合，这些对象代表用于编译图表目录或目录的样式。

## 说明


使用 **HeadingStyles** 属性可返回 **HeadingStyles** 集合。

使用 **Add** 方法可向 **HeadingStyles** 集合添加样式。

使用 **HeadingStyles** (_Index_) 可返回一个 **[HeadingStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadingStyle/obj)** 对象，其中 _Index_ 是索引号。索引号代表样式在 **HeadingStyles** 集合中的位置。


## 示例


```JavaScript
/*本示例显示活动文档上第一个目录的标题样式的数量。*/
function test() {
    alert(ActiveDocument.TablesOfContents.Item(1).HeadingStyles.Count)
}
```


```JavaScript
/*本示例在活动文档的开始处添加一个目录，然后向用于创建目录的样式列表添加 Title 样式。*/
function test() {
    let tableOfContents = ActiveDocument.TablesOfContents.Add(ActiveDocument.Range(0, 0), true, 1, 3)
    tableOfContents.HeadingStyles.Add("Title", 2)
}
```


```JavaScript
/*本示例在活动文档开头添加一个根据标题（Title）样式建立的图表目录，然后显示 HeadingStyles 集合中第一个样式的名称。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Add(ActiveDocument.Range(0, 0), "example", null, null, null, null, null, null, null, null, "Title")
    alert(tableOfFigures.HeadingStyles.Item(1).Style)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadingStyles/member/Add) | 返回一个 **HeadingStyle** 对象，该对象代表添加到文档中的新标题样式。在编译目录或图表目录时，都会包含该新标题样式。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadingStyles/member/Item) | 返回集合中的单个 **HeadingStyle** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadingStyles/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中标题样式的数量。只读。 |