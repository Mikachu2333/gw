# ListFormat.ListTemplate

返回一个 **ListTemplate** 对象，该对象代表指定 **ListFormat** 对象的列表格式。



## 语法

express.**ListTemplate**

express   一个代表 **ListFormat** 对象的变量。

## 类型

ListTemplate

## 说明


一个列表模板包含定义特定列表的所有格式。 **“项目符号和编号”** 对话框中每个选项卡上提供的七种格式中的每一种（ **“无”** 除外）都对应于一个列表模板。文档和模板也可以包含列表模板的集合。

如果 **ListFormat** 对象的范围的第一个段落的格式不是列表，则 **ListTemplate** 属性将返回 **null** 。



## 示例


```JavaScript
/*本示例将活动文档的第二段所用的列表模板应用到所选内容。*/
function test() {
    let listFormat = ActiveDocument.Paragraphs.Item(2).Range.ListFormat
    Application.Selection.Range.ListFormat.ApplyListTemplate(listFormat.ListTemplate)
}
```


```JavaScript
/*本示例显示第一个文档的第二段所用的列表模板的级别数量。*/
function test() {
    let listFormat = Application.Documents.Item(1).Paragraphs.Item(2).Range.ListFormat
    alert(listFormat.ListTemplate.ListLevels.Count)
}
```
