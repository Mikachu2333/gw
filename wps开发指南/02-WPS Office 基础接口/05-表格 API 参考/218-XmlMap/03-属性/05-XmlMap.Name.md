# XmlMap.Name

返回或设置一个 **String** 值，用于表示唯一标识工作簿中的映射的好记的名称。



## 语法

express.**Name**

express   一个代表 **XmlMap** 对象的变量。

## 类型

string

## 说明


为 **Name** 属性指定的字符串在工作簿中必须唯一，且不能超过 255 个字符。



## 示例


```JavaScript
/*本示例显示活动工作簿上第一项XmlMap的名称。*/
function test() {
    let xmlMap = Application.ActiveWorkbook.XmlMaps.Item(1)
    alert(xmlMap.Name)
}
```


```JavaScript
/*本示例设置第一张工作簿上第一项XmlMap的名称，并通知用户。*/
function test() {
    let xmlMap = Workbooks.Item(1).XmlMaps.Item(1)
    xmlMap.Name = "catalog_XmlMap"
    alert(`修改后的名称：${xmlMap.Name}`)
}
```
