# Range.Footnotes

返回一个 **[Footnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/obj)** 集合，该集合代表区域中的所有脚注。只读。



## 语法

express.**Footnotes**

express   一个代表 **Range** 对象的变量。

## 类型

Footnotes

## 示例


```JavaScript
/*本示例设置活动文档的主文章文档的脚注的起始编号和编号样式。*/
function test() {
    let footnotes = ActiveDocument.Content.Footnotes
    footnotes.StartingNumber = 3
    footnotes.NumberStyle = wdNoteNumberStyleLowercaseLetter
}
```


```JavaScript
/*本示例将所选内容中的脚注转换为尾注。*/
function test() {
    Selection.Range.Footnotes.Convert()
}
```
