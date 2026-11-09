# Range.ListFormat

返回一个 **[ListFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/obj)** 对象，该对象代表某区域中所有的列表格式特征。只读。



## 语法

express.**ListFormat**

express   一个代表 **Range** 对象的变量。

## 类型

ListFormat

## 示例


```JavaScript
/*本示例将活动文档中第3段到第6段中的一个区域赋给变量 range。然后，根据此区域中是否存在列表格式，来设置默认的多级符号列表格式或清除已有编号格式。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let range = ActiveDocument.Range(paragraphs.Item(3).Range.Start, paragraphs.Item(6).Range.End)
    range.ListFormat.ApplyOutlineNumberDefault()
}
```


```JavaScript
/*本示例对选定内容中所有段落应用“项目符号和编号”对话框“编号”选项卡中的第二个列表模板。*/
function test() {
    Selection.Range.ListFormat.ApplyListTemplate(ListGalleries.Item(wdNumberGallery).ListTemplates.Item(2))
}
```
