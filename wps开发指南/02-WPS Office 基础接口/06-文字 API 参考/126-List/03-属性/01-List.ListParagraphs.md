# List.ListParagraphs

返回一个 **[ListParagraphs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListParagraphs/obj)** 集合，该集合代表列表、文档或范围中的所有编号段落。只读。



## 语法

express.**ListParagraphs**

express   一个代表 **List** 对象的变量。

## 类型

ListParagraphs

## 示例


```JavaScript
/*本示例为活动文档中第一个列表中的段落添加双下划线。*/
function test() {
    let listParagraphs = ActiveDocument.Lists.Item(1).ListParagraphs
    for (let i = 1; i <= listParagraphs.Count; i++) {
        listParagraphs.Item(i).Range.Underline = wdUnderlineDouble
    }
}
```


```JavaScript
/*本示例将活动文档的主文档文章中第一个带有格式的列表的奇数段落设置为居中对齐。*/
function test() {
    let listParagraphs = ActiveDocument.Content.ListFormat.List.ListParagraphs
    for (let i = 1; i <= listParagraphs.Count; i += 2) {
        listParagraphs.Item(i).Alignment = wdAlignParagraphCenter
    }
}
```
