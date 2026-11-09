# HeaderFooter.Range

返回一个 **Range** 对象，该对象表示指定页眉或页脚中包含的文档部分。



## 语法

express.**Range**

express   一个代表 **HeaderFooter** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示活动文档上第一节中第一个页脚的文档部分的文本。*/
function test() {
    let headerFooter = ActiveDocument.Sections.Item(1).Footers.Item(wdHeaderFooterFirstPage)
    alert(headerFooter.Range.Text)
}
```


```JavaScript
/*本示例将所选页眉的文档部分的格式设置为加粗格式。*/
function test() {
    let range = Selection.HeaderFooter.Range
    range.Bold = true
}
```
