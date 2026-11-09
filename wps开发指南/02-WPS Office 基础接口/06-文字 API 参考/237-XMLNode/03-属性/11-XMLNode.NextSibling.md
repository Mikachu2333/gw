# XMLNode.NextSibling

返回一个 **XMLNode** 对象，该对象代表文档中与指定元素同级的下一个元素。



## 语法

express.**NextSibling**

express   一个代表 **XMLNode** 对象的变量。

## 类型

XMLNode

## 说明


如果指定元素是 **XMLNodes** 集合中的最后一个元素，则此属性返回 **null** 。



## 示例


```JavaScript
/*本示例显示活动文档中第二个元素的下一个同级元素的名称。*/
function test() {
    let xmlNode = Application.ActiveDocument.XMLNodes.Item(2).NextSibling
    alert(xmlNode.BaseName)
}
```


```JavaScript
/*本示例显示第一个文档上第三个XML元素的下一个同级元素中的文本。*/
function test() {
    let xmlNode = Documents.Item(1).XMLNodes.Item(3)
    alert(xmlNode.NextSibling.Text)
}
```
