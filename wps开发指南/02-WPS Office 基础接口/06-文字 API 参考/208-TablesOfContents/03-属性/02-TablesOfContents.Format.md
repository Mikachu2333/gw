# TablesOfContents.Format

返回或设置指定文档中目录的格式。 **WdTocFormat** 类型，可读写。



## 语法

express.**Format**

express   一个代表 **TablesOfContents** 对象的变量。

## 类型

WdTocFormat

## 示例


```JavaScript
/*本示例将第一个文档中的目录格式设为“古典”格式。*/
function test() {
    Documents.Item(1).TablesOfContents.Format = wdTOCClassic
}
```


```JavaScript
/*本示例显示活动文档中目录的格式是否为wdTOCTemplate。*/
function test() {
    alert(ActiveDocument.TablesOfContents.Format == wdTOCTemplate)
}
```
