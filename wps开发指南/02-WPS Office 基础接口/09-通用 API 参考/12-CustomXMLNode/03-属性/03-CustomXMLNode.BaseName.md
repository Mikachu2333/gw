# CustomXMLNode.BaseName

获取文档对象模型（DOM）中节点的不带命名空间前缀的基本名称（如果存在）。只读。



## 语法

express.**BaseName**

express   一个代表 **CustomXMLNode** 对象的变量。

## 类型

string

## 说明


这是 **CustomXMLNode** 对象的默认成员。



## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档上第四个 CustomXMLPart 对象中指定节点不带命名空间前缀的基本名称。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:child1")
    alert(customXMLNode.BaseName)
}
```


```JavaScript
/*本示例运行于文字组件，显示活动文档上第四个 CustomXMLPart 对象指定节点的所有子节点不带命名空间前缀的基本名称。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1")
    let str = ""
    for (let i = 1; i <= customXMLNode.ChildNodes.Count; i++) {
        str += customXMLNode.ChildNodes.Item(i).BaseName + "\n"
    }
    alert(str)
}
```
