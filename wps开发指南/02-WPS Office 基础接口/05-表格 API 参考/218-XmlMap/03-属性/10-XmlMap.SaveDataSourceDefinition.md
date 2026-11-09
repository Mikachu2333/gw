# XmlMap.SaveDataSourceDefinition

如果要在保存工作簿的同时保存指定 XML 架构映射的数据源定义，则设为 **True** 。默认值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**SaveDataSourceDefinition**

express   一个代表 **XmlMap** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示保存活动工作簿是否同时保存该工作簿上第一项XmlMap的数据源定义。*/
function test() {
    let xmlMap = ActiveWorkbook.XmlMaps.Item(1)
    alert(xmlMap.SaveDataSourceDefinition)
}
```


```JavaScript
/*本示例将第一张工作簿第一项XmlMap设置为保存工作簿的同时，不保存该映射的数据源定义。*/
function test() {
    let xmlMap = Workbooks.Item(1).XmlMaps.Item(1)
    xmlMap.SaveDataSourceDefinition = false
}
```
