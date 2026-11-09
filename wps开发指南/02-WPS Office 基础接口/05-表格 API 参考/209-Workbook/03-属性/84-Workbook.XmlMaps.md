# Workbook.XmlMaps

返回一个 **XmlMaps** 集合，该集合表示已被添加到指定工作簿的架构映射。只读。



## 语法

express.**XmlMaps**

express   一个代表 **Workbook** 对象的变量。

## 类型

XmlMaps

## 示例


```JavaScript
/*本示例显示活动工作簿上 XML 映射的数量。*/
function test() {
    alert(ActiveWorkbook.XmlMaps.Count)
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
