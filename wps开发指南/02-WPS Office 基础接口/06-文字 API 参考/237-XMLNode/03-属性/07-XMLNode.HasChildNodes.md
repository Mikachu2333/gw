# XMLNode.HasChildNodes

返回 **Boolean** 值，该值表示 XML 节点是否有子节点。只读。



## 语法

express.**HasChildNodes**

express   一个代表 **XMLNode** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动文档上没有子节点的XML节点中的文本设置为“example”。*/
function test() {
    for (let i = 1; i <= ActiveDocument.XMLNodes.Count; i++) {
        if (!ActiveDocument.XMLNodes.Item(i).HasChildNodes) {
            ActiveDocument.XMLNodes.Item(i).Text = "example"
        }
    }
}
```


```JavaScript
/*本示例显示第一个文档上具有子节点的XML节点的数量。*/
function test() {
    let xmlNodes = Documents.Item(1).XMLNodes
    let num = 0
    for (let i = 1; i <= xmlNodes.Count; i++) {
        if (xmlNodes.Item(i).HasChildNodes) {
            num++
        }
    } alert(num)
}
```
