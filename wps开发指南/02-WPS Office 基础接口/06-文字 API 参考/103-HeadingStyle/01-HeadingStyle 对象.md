# HeadingStyle 对象

代表用于建立目录或图表目录的样式。 **HeadingStyle** 对象是 **[HeadingStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadingStyles/obj)** 集合的一个成员。

## 说明


使用 **HeadingStyles** (_Index_) 可返回一个 **HeadingStyle** 对象，其中 _Index_ 是索引号。索引号代表样式在 **HeadingStyles** 集合中的位置。

使用 **Add** 方法可向 **HeadingStyles** 集合添加样式。


## 示例


```JavaScript
/*本示例在活动文档开头添加一个根据标题（Title）样式建立的图表目录，然后显示该图表目录第一个样式的名称。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Add(ActiveDocument.Range(0, 0), "example", null, null, null, null, null, null, null, null, "Title")
    alert(tableOfFigures.HeadingStyles.Item(1).Style)
}
```


```JavaScript
/*本示例在活动文档的开始处添加一个目录，然后向用于创建目录的样式列表添加 Title 样式，并修改标题样式的级别。*/
function test() {
    let tableOfContents = ActiveDocument.TablesOfContents.Add(ActiveDocument.Range(0, 0), true, 1, 3)
    tableOfContents.HeadingStyles.Add("Title", 2)
    tableOfContents.HeadingStyles.Item(1).Level = 4
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadingStyle/member/Delete) | 删除指定的标题样式。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Level](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadingStyle/member/Level) | 返回或设置目录或图表目录中标题样式的级别。可读写 **Integer** 类型。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadingStyle/member/Style) | 返回或设置标题的样式。可读写 **Variant** 类型。 |