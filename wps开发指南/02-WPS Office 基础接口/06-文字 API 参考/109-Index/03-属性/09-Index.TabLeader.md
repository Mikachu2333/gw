# Index.TabLeader

返回或设置索引中各项与它们的相关联页码之间的前导符。可读写 **WdTabLeader** 类型。



## 语法

express.**TabLeader**

express   一个代表 **Index** 对象的变量。

## 类型

WdTabLeader

## 示例


```JavaScript
/*本示例在活动文档的末尾添加一个索引，页码为右对齐，并以虚线为制表符前导符。*/
function test() {
    let range = ActiveDocument.Range(ActiveDocument.Content.End - 1, ActiveDocument.Content.End - 1)
    let index = ActiveDocument.Indexes.Add(range, null, true, wdIndexIndent)
    index.TabLeader = wdTabLeaderDashes
}
```


```JavaScript
/*本示例显示第一个文档上第二个索引的条目和页码之间的前导符是否为wdTabLeaderDots。*/
function test() {
    let index = Documents.Item(1).Indexes.Item(2)
    alert(index.TabLeader == wdTabLeaderDots)
}
```
