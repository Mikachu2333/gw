# TabStop.Leader

返回或设置指定 **TabStop** 对象的前导字符。 **WdTabLeader** 类型，可读写。



## 语法

express.**Leader**

express   一个代表 **TabStop** 对象的变量。

## 类型

WdTabLeader

## 示例


```JavaScript
/*本示例将活动文档各段落中所有制表位的前导字符都更改为短划线。*/
function test() {
    let tabStops = ActiveDocument.Paragraphs.TabStops
    for (let i = 1; i < tabStops.Count; i++) {
        tabStops.Item(i).Leader = wdTabLeaderDashes
    }
}
```


```JavaScript
/*本示例显示第一个文档的第一个段落中第二个制表位的前导字符是否为空格。*/
function test() {
    let paragraph = Documents.Item(1).Paragraphs.Item(1)
    alert(paragraph.TabStops.Item(2).Leader == wdTabLeaderSpaces)
}
```
