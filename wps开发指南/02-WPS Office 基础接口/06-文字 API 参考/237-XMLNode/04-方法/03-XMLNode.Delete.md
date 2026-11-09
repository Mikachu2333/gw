# XMLNode.Delete

删除 XML 文档中指定的 XML 元素。



## 语法

express.**Delete()**

express   一个代表 **XMLNode** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档中的第二个XML元素。*/
function test() {
    ActiveDocument.XMLNodes.Item(2).Delete()
}
```


```JavaScript
/*本示例遍历第一个文档上所有XML元素，然后删除该文档上名为“Text”的元素。*/
function test() {
    let xmlNodes = Documents.Item(1).XMLNodes
    for (let i = 1; i <= xmlNodes.Count; i++) {
        if (xmlNodes.Item(i).BaseName == "Text") {
            xmlNodes.Item(i).Delete()
        }
    }
}
```
