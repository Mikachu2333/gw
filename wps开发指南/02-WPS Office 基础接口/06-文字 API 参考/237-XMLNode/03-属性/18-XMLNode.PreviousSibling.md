# XMLNode.PreviousSibling

返回一个 **XMLNode** 对象，该对象代表文档中与指定元素同级的前一个元素。



## 语法

express.**PreviousSibling**

express   一个代表 **XMLNode** 对象的变量。

## 类型

XMLNode

## 说明


如果指定元素是 **XMLNodes** 集合中的第一个元素，则此属性返回 **null** 。



## 示例


```JavaScript
/*本示例显示活动文档中第四个元素的前一个同级元素的名称。*/
function test() {
    let xmlNode = Application.ActiveDocument.XMLNodes.Item(4).PreviousSibling
    alert(xmlNode.BaseName)
}
```


```JavaScript
/*本示例显示第一个文档上第三个XML元素前一个同级元素中的文本。*/
function test() {
    let xmlNodes = Documents.Item(1).XMLNodes
    alert(xmlNodes.Item(3).PreviousSibling.Text)
}
```
