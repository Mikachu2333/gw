# TableOfContents.Range

返回一个 **Range** 对象，该对象代表指定目录中所含的文档部分。



## 语法

express.**Range**

express   一个代表 **TableOfContents** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例将活动文档中第一个目录中文档部分的文字设置加粗。*/
function test() {
    ActiveDocument.TablesOfContents.Item(1).Range.Bold = true
}
```


```JavaScript
/*本示例显示第一个文档上最后一个目录的文档部分的文本。*/
function test() {
    let tablesOfContents = Documents.Item(1).TablesOfContents
    alert(tablesOfContents.Item(tablesOfContents.Count).Range.Text)
}
```
