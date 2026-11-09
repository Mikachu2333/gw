# ListTemplates.Add

返回一个 **ListTemplate** 对象，该对象代表新的列表模板。



## 语法

express.**Add(OutlineNumbered, Name)**

express   一个代表 **ListTemplates** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| OutlineNumbered | 可选 | any | 如果该属性值为 **True** ，则将多级符号应用于新的列表模板。 |
| Name | 可选 | any | 用于将列表模板链接到 LISTNUM 域的可选名称。不能使用该名称在集合中对列表模板进行索引。 |

## 返回值

ListTemplate

## 说明


不能将 **Add** 方法用于从 **ListGallery** 对象返回的 **ListTemplates** 对象。但是可以修改库中原有的列表模板。



## 示例


```JavaScript
/*本示例向活动文档添加新的单级列表模板，并更改新列表模板的编号样式，然后将该列表模板应用于所选内容。*/
function test() {
    let listTemplate = ActiveDocument.ListTemplates.Add(false)
    listTemplate.ListLevels.Item(1).NumberStyle = wdListNumberStyleUppercaseLetter
    Selection.Range.ListFormat.ApplyListTemplate(listTemplate)
}
```


```JavaScript
/*本示例向第一个文档添加新的多级列表模板，并更改新列表模板的编号样式。*/
function test() {
    let listTemplate = Documents.Item(1).ListTemplates.Add(true, "example_1")
    listTemplate.ListLevels.Item(1).NumberStyle = wdListNumberStyleLowercaseLetter
}
```
