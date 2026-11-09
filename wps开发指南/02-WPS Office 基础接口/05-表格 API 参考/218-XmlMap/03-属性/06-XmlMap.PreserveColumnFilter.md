# XmlMap.PreserveColumnFilter

返回或设置在指定的 XML 映射被刷新时是否保留筛选。 **Boolean** 类型，可读写。



## 语法

express.**PreserveColumnFilter**

express   一个代表 **XmlMap** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作簿上第一项XmlMap被刷新时是否保留筛选。*/
function test() {
    let xmlMap = Application.ActiveWorkbook.XmlMaps.Item(1)
    alert(xmlMap.PreserveColumnFilter)
}
```


```JavaScript
/*本示例判断如果第一张工作簿上第一项XmlMap的名称为“catalog_映射”，则设置该映射被刷新时不保留筛选。*/
function test() {
    let xmlMap = Workbooks.Item(1).XmlMaps.Item(1)
    if (xmlMap.Name == "catalog_映射") {
        xmlMap.PreserveColumnFilter = false
    }
}
```
