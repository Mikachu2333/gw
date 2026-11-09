# XmlMap.RootElementName

返回一个 **String** 类型的数值，该数值表示指定 XML 架构映射的根元素 （根元素：包含所有其他元素的 XML 文档的元素。它是 XML 文档的顶层元素，并且必须是文档中的第一个元素。）的名称。只读。



## 语法

express.**RootElementName**

express   一个代表 **XmlMap** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作簿上第一项XmlMap的根元素的名称。*/
function test() {
    let xmlMap = ActiveWorkbook.XmlMaps.Item(1)
    alert(xmlMap.RootElementName)
}
```


```JavaScript
/*本示例将第一张工作簿上第一项XmlMap的名称和根元素的名称分别赋值给A8和A9单元格。*/
function test() {
    let xmlMap = Workbooks.Item(1).XmlMaps.Item(1)
    Range("A8").Value2 = xmlMap.Name
    Range("A9").Value2 = xmlMap.RootElementName
}
```
