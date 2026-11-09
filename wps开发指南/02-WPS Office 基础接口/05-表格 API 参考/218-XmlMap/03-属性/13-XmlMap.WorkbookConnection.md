# XmlMap.WorkbookConnection

返回指定的 **XMLMap** 对象的新连接。只读。



## 语法

express.**WorkbookConnection**

express   一个代表 **XmlMap** 对象的变量。

## 类型

WorkbookConnection

## 示例


```JavaScript
/*本示例显示活动工作簿上第一项XmlMap的连接的简要说明。*/
function test() {
    let xmlMap = ActiveWorkbook.XmlMaps.Item(1)
    alert(xmlMap.WorkbookConnection.Description)
}
```


```JavaScript
/*本示例显示第一张工作簿上第一项XmlMap的连接类型是否为xlConnectionTypeXMLMAP。*/
function test() {
    let xmlMap = Workbooks.Item(1).XmlMaps.Item(1)
    alert(xmlMap.WorkbookConnection.Type == xlConnectionTypeXMLMAP)
}
```
