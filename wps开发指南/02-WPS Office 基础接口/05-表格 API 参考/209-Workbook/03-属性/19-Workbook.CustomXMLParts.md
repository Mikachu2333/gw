# Workbook.CustomXMLParts

返回一个 **[CustomXMLParts](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLParts/obj)** 集合，该集合代表 XML 数据存储区中的自定义 XML。只读。



## 语法

express.**CustomXMLParts**

express   一个代表 **Workbook** 对象的变量。

## 类型

CustomXMLParts

## 示例


```JavaScript
/*本示例将分配给第一张工作簿上第一个CustomXMLPart对象的GUID赋值给第二张工作表上A1单元格。*/
function test() {
    Worksheets.Item(2).Range("A1").Value2 = Workbooks.Item(1).CustomXMLParts.Item(1).Id
}
```


```JavaScript
/*本示例将活动工作簿上所有CustomXMLPart对象的命名空间的唯一地址标识符赋值给第二张工作表的单元格。*/
function test() {
    let ctXMLParts = ActiveWorkbook.CustomXMLParts
    for (let i = 1; i <= ctXMLParts.Count; i++) {
        Worksheets.Item(2).Cells.Item(i, 1).Value2 = ctXMLParts.Item(i).NamespaceURI
    }
}
```
