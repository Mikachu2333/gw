# CustomXMLPart.DocumentElement

获取文档中数据绑定区域的根元素。如果该区域为空，则该属性将返回 **null** 。只读。



## 语法

express.**DocumentElement**

express   一个代表 **CustomXMLPart** 对象的变量。

## 类型

CustomXMLNode

## 示例


```JavaScript
/*本示例运行于表格组件，显示第一张工作簿上第一个 CustomXMLPart 对象的根节点元素的不带命名空间前缀的基本名称。*/
function test() {
    let customXMLNode = Workbooks.Item(1).CustomXMLParts.Item(1).DocumentElement
    alert(customXMLNode.BaseName)
}
```


```JavaScript
/*本示例运行于表格组件，将活动工作簿上第一个 CustomXMLPart 对象的根节点元素的 XPath 字符串赋值给 A4 单元格。*/
function test() {
    let customXMLNode = ActiveWorkbook.CustomXMLParts.Item(1).DocumentElement
    Range("A4").Value2 = customXMLNode.XPath
}
```
