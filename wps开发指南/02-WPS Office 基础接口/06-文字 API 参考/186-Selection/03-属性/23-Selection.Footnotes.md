# Selection.Footnotes

返回一个 **[Footnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/obj)** 集合，该集合代表区域、选定内容或文档中的所有脚注。只读。



## 语法

express.**Footnotes**

express   一个代表 **Selection** 对象的变量。

## 类型

Footnotes

## 示例


```JavaScript
/*本示例在插入点插入一个自动编号的脚注。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    Selection.Footnotes.Add(Selection.Range, null, "(WPS Office, 1989)")
}
```


```JavaScript
/*本示例将选定内容的脚注集合的起始编号设置为 10。*/
function test() {
    Selection.Footnotes.StartingNumber = 10
}
```
