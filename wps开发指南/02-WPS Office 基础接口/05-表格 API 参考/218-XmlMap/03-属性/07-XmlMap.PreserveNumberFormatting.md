# XmlMap.PreserveNumberFormatting

刷新架构映射时，如果要保留映射到指定 XML 架构映射的单元格的数字格式，则设为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**PreserveNumberFormatting**

express   一个代表 **XmlMap** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示第一张工作簿上第一项XmlMap被刷新时是否保留被映射到的单元格的数字格式。*/
function test() {
    let xmlMap = Workbooks.Item(1).XmlMaps.Item(1)
    alert(xmlMap.PreserveNumberFormatting)
}
```


```JavaScript
/*本示例将活动工作簿上第一项XmlMap设置为被刷新时不保留被映射到的单元格的数字格式。*/
function test() {
    let xmlMap = ActiveWorkbook.XmlMaps.Item(1)
    xmlMap.PreserveNumberFormatting = false
}
```
