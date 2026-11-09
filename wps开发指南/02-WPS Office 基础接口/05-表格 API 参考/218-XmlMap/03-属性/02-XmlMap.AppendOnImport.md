# XmlMap.AppendOnImport

如果希望在导入新数据或刷新现有连接时将新行附加到绑定在指定架构映射的 XML 列表中，则设该属性值 **True** 。如果希望在导入新数据或刷新现有连接时覆盖绑定到指定架构映射的单元格内容，则该属性值为 **False** 。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**AppendOnImport**

express   一个代表 **XmlMap** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作簿上第一项XmlMap导入新数据或刷新现有连接时是否将新行附加到绑定在该架构映射的 XML 列表中。*/
function test() {
    let xmlMap = Application.ActiveWorkbook.XmlMaps.Item(1)
    alert(xmlMap.AppendOnImport)
}
```


```JavaScript
/*此示例将第一张工作簿上第一项XmlMap设置为导入新数据或刷新现有连接时覆盖绑定到该架构映射的单元格内容，然后将XML文件导入该工作簿的第一项XmlMap对应的单元格中。*/
function test() {
    let xmlMap = Workbooks.Item(1).XmlMaps.Item(1)
    xmlMap.AppendOnImport = false
    if (xmlMap.Import("D:\\示例\\example1.xml") == xlXmlImportSuccess) {
        alert("导入XML数据文件成功")
    } else {
        alert("导入XML数据文件失败或被截断")
    }
}
```
