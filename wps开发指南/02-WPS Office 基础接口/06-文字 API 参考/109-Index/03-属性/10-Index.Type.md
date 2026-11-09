# Index.Type

返回或设置索引的类型。可读/写 **[WdIndexType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdIndexType)** 类型。



## 语法

express.**Type**

express   一个代表 **Index** 对象的变量。

## 类型

WdIndexType

## 示例


```JavaScript
/*本示例显示活动文档上第一个索引的类型是否为缩进索引。*/
function test() {
    alert(ActiveDocument.Indexes.Item(1).Type == wdIndexIndent)
}
```


```JavaScript
/*本示例将第一个文档上第二个索引的类型设置为接排式索引。*/
function test() {
    let index = Documents.Item(1).Indexes.Item(2)
    index.Type = wdIndexRunin
}
```
