# Indexes.Format

返回或设置 **WdIndexFormat** ，代表指定文档中索引的格式。可读写。



## 语法

express.**Format**

express   一个代表 **Indexes** 对象的变量。

## 类型

WdIndexFormat

## 示例


```JavaScript
/*本示例显示活动文档上索引的格式是否为wdIndexTemplate。*/
function test() {
    alert(ActiveDocument.Indexes.Format == wdIndexTemplate)
}
```


```JavaScript
/*本示例将第一个文档上索引的格式设置为wdIndexFormal。*/
function test() {
    Documents.Item(1).Indexes.Format = wdIndexFormal
}
```
