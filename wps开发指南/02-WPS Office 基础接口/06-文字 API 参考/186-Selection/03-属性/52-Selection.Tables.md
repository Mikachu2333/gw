# Selection.Tables

返回一个 **[Tables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Tables)** 集合，该集合代表指定选定内容中的所有表格。只读。



## 语法

express.**Tables**

express   一个代表 **Selection** 对象的变量。

## 类型

Tables

## 示例


```JavaScript
/*本示例设置所选内容中每个表的边框样式。*/
function test() {
    let tables = Selection.Tables
    for (let i = 1; i <= tables.Count; i++) {
        let borders = tables.Item(i).Borders
        borders.OutsideLineStyle = wdLineStyleDouble
        borders.OutsideLineWidth = wdLineWidth025pt
        borders.InsideLineStyle = wdLineStyleNone
    }
}
```


```JavaScript
/*本示例将第一个窗口中所选的第一个表格转换为文本。*/
function test() {
    Windows.Item(1).Selection.Tables.Item(1).ConvertToText()
}
```
