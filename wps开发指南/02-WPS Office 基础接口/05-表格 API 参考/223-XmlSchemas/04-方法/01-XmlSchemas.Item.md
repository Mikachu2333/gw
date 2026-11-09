# XmlSchemas.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **XmlSchemas** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

XmlSchema

## 示例


```JavaScript
/*本示例将第一张工作簿上第一项XmlMap所包含的第一个XML架构的内容赋值给A7单元格。*/
function test() {
    let xmlSchemas = Workbooks.Item(1).XmlMaps.Item(1).Schemas
    Range("A7").Value2 = xmlSchemas.Item(1).XML
}
```


```JavaScript
/*本示例显示活动工作簿上第一项XmlMap所包含的第二个XML架构的名称。*/
function test() {
    let xmlSchemas = ActiveWorkbook.XmlMaps.Item(1).Schemas
    alert(xmlSchemas.Item(2).Name)
}
```
