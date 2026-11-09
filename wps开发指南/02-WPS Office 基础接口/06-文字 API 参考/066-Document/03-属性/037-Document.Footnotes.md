# Document.Footnotes

返回一个 **[Footnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/obj)** 集合，该集合代表文档中的所有脚注。只读。



## 语法

express.**Footnotes**

express   一个代表 **Document** 对象的变量。

## 类型

Footnotes

## 示例


```JavaScript
/*本示例将活动文档中的脚注编号样式设置为以“c”开头的小写字母。*/
function test() {
    let footnotes = ActiveDocument.Footnotes
    footnotes.StartingNumber = 3
    footnotes.NumberStyle = wdNoteNumberStyleLowercaseLetter
}
```


```JavaScript
/*本示例在插入点插入一个自动编号的脚注。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    ActiveDocument.Footnotes.Add(Selection.Range, null, "(Lone Creek Press, 1995)")
}
```
