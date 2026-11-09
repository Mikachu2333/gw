# XMLNode.Cut

将指定的 XML 元素从文档中移到剪贴板上。



## 语法

express.**Cut()**

express   一个代表 **XMLNode** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将选中的第二个XML节点移到剪贴板上。*/
function test() {
    Selection.XMLNodes.Item(2).Cut()
}
```


```JavaScript
/*本示例将第一个文档上第二个XML元素移到剪贴板。*/
function test() {
    let xmlNodes = Documents.Item(1).XMLNodes
    xmlNodes.Item(2).Cut()
}
```
