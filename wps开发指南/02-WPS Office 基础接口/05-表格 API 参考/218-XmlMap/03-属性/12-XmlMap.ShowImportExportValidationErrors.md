# XmlMap.ShowImportExportValidationErrors

当数据通过指定的 XML 架构映射导入或导出时，返回或设置是否显示详细说明架构有效性验证错误的对话框。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowImportExportValidationErrors**

express   一个代表 **XmlMap** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作簿上第一项XmlMap导入或导出时是否展示详细说明架构有效性验证错误的对话框。*/
function test() {
    let xmlMap = ActiveWorkbook.XmlMaps.Item(1)
    alert(xmlMap.ShowImportExportValidationErrors)
}
```


```JavaScript
/*本示例将第一张工作簿上第一项XmlMap设置为导入或导出时不展示详细说明架构有效性验证错误的对话框。*/
function test() {
    let xmlMap = Workbooks.Item(1).XmlMaps.Item(1)
    xmlMap.ShowImportExportValidationErrors = false
}
```
