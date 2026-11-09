# Index.SortBy

返回或设置指定索引的排序标准。 **WdIndexSortBy** 类型，可读写。



## 语法

express.**SortBy**

express   一个代表 **Index** 对象的变量。

## 类型

WdIndexSortBy

## 示例


```JavaScript
/*本示例将活动文档的第一个索引设置为按照笔画数排序。*/
function test() {
    ActiveDocument.Indexes.Item(1).SortBy = wdIndexSortByStroke
}
```


```JavaScript
/*本示例判断第一个文档上第二个索引的排序标准，并通知用户。*/
function test() {
    let index = Documents.Item(1).Indexes.Item(2)
    if (index.SortBy == wdIndexSortBySyllable) {
        alert("索引按照发音排序")
    } else {
        alert("索引按照字符的笔画数排序")
    }
}
```
