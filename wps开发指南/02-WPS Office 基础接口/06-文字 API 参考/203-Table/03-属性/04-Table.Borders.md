# Table.Borders

返回一个 **Borders** 集合，该集合代表指定对象的所有边框。



## 语法

express.**Borders**

express   一个代表 **Table** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*本示例对活动文档中的第一个表格应用内部和外部边框*/
function test() {
    let table = Application.ActiveDocument.Tables.Item(1)
    table.Borders.InsideLineStyle = wdLineStyleSingle
    table.Borders.OutsideLineStyle = wdLineStyleDouble
}
```


```JavaScript
/*本示例对选中的第一个表格应用深红色、1.5磅宽的双实线外部边框*/
function test() {
    let table = Selection.Tables.Item(1)
    table.Borders.OutsideColor = wdColorDarkRed
    table.Borders.OutsideLineWidth = wdLineWidth150pt
    table.Borders.OutsideLineStyle = wdLineStyleDouble
}
```
