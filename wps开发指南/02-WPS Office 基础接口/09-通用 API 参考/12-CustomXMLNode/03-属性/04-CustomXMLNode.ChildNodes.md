# CustomXMLNode.ChildNodes

获取一个包含当前节点中所有子元素的 **CustomXMLNodes** 集合。只读。



## 语法

express.**ChildNodes**

express   一个代表 **CustomXMLNode** 对象的变量。

## 类型

CustomXMLNodes

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档上第四个 CustomXMLPart 对象中指定节点的第二个子节点的文本。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1")
    alert(customXMLNode.ChildNodes.Item(2).Text)
}
```


```JavaScript
/*本示例运行于文字组件，将活动文档上第四个 CustomXMLPart 对象指定节点的所有子节点不带命名空间前缀的基本名称插入到光标处。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1")
    for (let i = 1; i <= customXMLNode.ChildNodes.Count; i++) {
        Selection.TypeText(customXMLNode.ChildNodes.Item(i).BaseName + "\n")
    }
}
```
