# XMLNode.Text

返回或设置 XML 元素中包含的文本。 **String** 类型，可读写。



## 语法

express.**Text**

express   一个代表 **XMLNode** 对象的变量。

## 类型

string

## 说明


 **Text** 属性返回 XML 元素中的无格式纯文本。设置该属性，可替换现有文本。



## 示例


```JavaScript
/*本示例将活动文档中第四个XML元素的文本设置为“test”。*/
function test() {
    let xmlNode = Application.ActiveDocument.XMLNodes.Item(4)
    xmlNode.Text = "test"
}
```


```JavaScript
/*本示例显示第一个文档上第三个XML元素前一个同级元素中的文本。*/
function test() {
    let xmlNodes = Documents.Item(1).XMLNodes
    alert(xmlNodes.Item(3).PreviousSibling.Text)
}
```
