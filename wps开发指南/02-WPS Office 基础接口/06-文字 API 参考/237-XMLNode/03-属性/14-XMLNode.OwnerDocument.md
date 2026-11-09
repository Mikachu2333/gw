# XMLNode.OwnerDocument

返回一个代表指定 XML 元素的父文档的 **Document** 对象。



## 语法

express.**OwnerDocument**

express   一个代表 **XMLNode** 对象的变量。

## 类型

Document

## 示例


```JavaScript
/*本示例显示所选内容中第一个XML元素的父文档的名称。*/
function test() {
    let xmlNode = Application.Selection.XMLNodes.Item(1)
    alert(xmlNode.OwnerDocument.Name)
}
```


```JavaScript
/*本示例将活动文档上第二个XML元素的父文档的所有段落的对齐方式设置为居中对齐。*/
function test() {
    let xmlNode = ActiveDocument.XMLNodes.Item(2)
    xmlNode.OwnerDocument.Paragraphs.Alignment = wdAlignParagraphCenter
}
```
