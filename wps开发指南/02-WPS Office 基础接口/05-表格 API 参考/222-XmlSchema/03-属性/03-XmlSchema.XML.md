# XmlSchema.XML

返回一个 **String** 值，它代表指定架构的内容。



## 语法

express.**XML**

express   一个代表 **XmlSchema** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一张工作簿上第一项XmlMap的第一个XML架构的内容。*/
function test() {
    let xmlMap = Workbooks.Item(1).XmlMaps.Item(1)
    console.log(xmlMap.Schemas.Item(1).XML)
}
```


```JavaScript
/*本示例将活动工作簿上第一项XmlMap的第二个XML架构的内容赋值到A5单元格。*/
function test() {
    let xmlSchema = ActiveWorkbook.XmlMaps.Item(1).Schemas.Item(2)
    Range("A5").Value2 = xmlSchema.XML
}
```
