# XmlMaps.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **XmlMaps** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

XmlMap

## 示例


```JavaScript
/*本示例显示活动工作簿上第一项XmlMap被刷新时是否保留筛选。*/
function test() {
    let xmlMap = Application.ActiveWorkbook.XmlMaps.Item(1)
    alert(xmlMap.PreserveColumnFilter)
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
