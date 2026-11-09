# XMLNode.Copy

将指定的 XML 元素（不包括 XML 标记）复制到剪贴板。



## 语法

express.**Copy()**

express   一个代表 **XMLNode** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将选中的第一个XML元素复制到剪贴板。*/
function test() {
    Selection.XMLNodes.Item(1).Copy()
}
```


```JavaScript
/*本示例将第一个文档上第五个XML元素复制到剪贴板。*/
function test() {
    let xmlNode = Documents.Item(1).XMLNodes.Item(5)
    xmlNode.Copy()
}
```
