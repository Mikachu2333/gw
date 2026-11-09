# XMLNode.BaseName

返回一个 **String** 类型的值，该值代表不带任何前缀的元素名称。



## 语法

express.**BaseName**

express   一个代表 **XMLNode** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置活动文档上名为“Text”的XML元素中的文本。*/
function test() {
    for (let i = 1; i <= ActiveDocument.XMLNodes.Count; i++) {
        let xmlNode = ActiveDocument.XMLNodes.Item(i)
        if (xmlNode.NodeType == wdXMLNodeElement && xmlNode.BaseName == "Text") {
            xmlNode.Text = "David Barber"
        }
    }
}
```


```JavaScript
/*本示例将活动文档上所有XML元素的名称赋值到该文档上第一张表格中。*/
function test() {
    for (let i = 1; i <= ActiveDocument.XMLNodes.Count; i++) {
        let xmlNode = ActiveDocument.XMLNodes.Item(i)
        ActiveDocument.Tables.Item(1).Cell(1, i).Range.Text = xmlNode.BaseName
    }
}
```
