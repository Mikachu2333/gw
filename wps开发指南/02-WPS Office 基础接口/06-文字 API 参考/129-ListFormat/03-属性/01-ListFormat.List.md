# ListFormat.List

返回一个 **[List](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/List/obj)** 对象，该对象代表在指定 **ListFormat** 对象中包含的第一个已设置格式的列表。



## 语法

express.**List**

express   一个代表 **ListFormat** 对象的变量。

## 类型

List

## 说明


如果没有将 **ListFormat** 对象区域中的第一段设置为列表格式，则 **List** 属性不返回值。



## 示例


```JavaScript
/*本示例为选定内容中的第一个列表应用“开始”菜单上“项目符号和编号”对话框中“编号”选项卡上的第一个列表模板（不包括“无”选项）。选定内容只能包含一个列表。*/
function test() {
    let list = Selection.Range.ListFormat.List
    list.ApplyListTemplate(ListGalleries(wdNumberGallery).ListTemplates(1))
}
```


```JavaScript
/*本示例为活动文档的主文档文章的第一个列表的第二个段落应用加粗格式。*/
function test() {
    let list = ActiveDocument.Content.ListFormat.List
    list.ListParagraphs.Item(2).Range.Bold = msoTrue
}
```
