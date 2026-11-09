# TableOfContents.UseHyperlinks

返回或设置在网站上发布目录项时是否将其设置为超链接格式。可读写 **Boolean** 类型。



## 语法

express.**UseHyperlinks**

express   一个代表 **TableOfContents** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动文档中第一个目录设为超链接格式，然后更新该目录中显示的项。*/
function test() {
    let tableOfContents = ActiveDocument.TablesOfContents.Item(1)
    tableOfContents.UseHyperlinks = true
    tableOfContents.Update()
}
```


```JavaScript
/*本示例显示第一个文档发布到网站是否将文档中最后一个目录的项设置为超链接格式。*/
function test() {
    let tablesOfContents = Documents.Item(1).TablesOfContents
    alert(tablesOfContents.Item(tablesOfContents.Count).UseHyperlinks)
}
```
