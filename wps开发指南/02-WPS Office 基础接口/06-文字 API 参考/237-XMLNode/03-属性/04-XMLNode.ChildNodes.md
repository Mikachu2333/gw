# XMLNode.ChildNodes

返回一个 **XMLNodes** 集合，该集合代表指定元素的子元素。



## 语法

express.**ChildNodes**

express   一个代表 **XMLNode** 对象的变量。

## 类型

XMLNodes

## 示例


```JavaScript
/*本示例删除活动文档中根元素的第一个子元素。*/
function test() {
    let xmlNode = ActiveDocument.XMLNodes.Item(1)
    xmlNode.RemoveChild(xmlNode.ChildNodes.Item(1))
}
```


```JavaScript
/*本示例显示第一个文档上第一个XML元素所有子元素中的文本。*/
function test() {
    let xmlNodes = Documents.Item(1).XMLNodes.Item(1).ChildNodes
    for (let i = 1; i <= xmlNodes.Count; i++) {
        alert(xmlNodes.Item(i).Text)
    }
}
```
