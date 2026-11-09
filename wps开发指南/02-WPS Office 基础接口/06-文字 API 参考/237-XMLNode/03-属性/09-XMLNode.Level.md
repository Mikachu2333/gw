# XMLNode.Level

返回一个 **[WdXMLNodeLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdXMLNodeLevel)** 常量，该常量代表 XML 元素是段落的一部分、是整个段落、包含在表格单元格中还是包含表格行。只读。



## 语法

express.**Level**

express   一个代表 **XMLNode** 对象的变量。

## 类型

WdXMLNodeLevel

## 示例


```JavaScript
/*本示例显示活动文档中第一个XML元素的Level属性值是否为wdXMLNodeLevelInline。*/
function test() {
    let xmlNode = Application.ActiveDocument.XMLNodes.Item(1).LastChild
    alert(xmlNode.Level == wdXMLNodeLevelInline)
}
```


```JavaScript
/*本示例判断如果第一个文档上第三个XML元素的Level属性值为wdXMLNodeLevelParagraph，则显示该XML元素的名称。*/
function test() {
    let xmlNode = Documents.Item(1).XMLNodes.Item(3)
    if (xmlNode.Level == wdXMLNodeLevelParagraph) {
        alert(xmlNode.BaseName)
    }
}
```
