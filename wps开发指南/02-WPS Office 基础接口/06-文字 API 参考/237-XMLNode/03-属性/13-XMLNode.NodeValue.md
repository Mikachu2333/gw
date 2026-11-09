# XMLNode.NodeValue

返回或设置一个 **String** 类型的值，该值代表 XML 元素的值。可读写。



## 语法

express.**NodeValue**

express   一个代表 **XMLNode** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档中第二个XML元素的下一个同级元素的值。*/
function test() {
    let xmlNode = Application.ActiveDocument.XMLNodes.Item(2).NextSibling
    alert(xmlNode.NodeValue)
}
```


```JavaScript
/*本示例设置第一个文档上第三个XML元素的值。*/
function test() {
    let xmlNode = Documents.Item(1).XMLNodes.Item(3)
    xmlNode.NodeValue = "example_3"
}
```
