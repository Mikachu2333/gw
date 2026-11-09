# Column.Borders

返回一个 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/obj)** 集合，该集合代表指定对象的所有边框。



## 语法

express.**Borders**

express   一个代表 **Column** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*本示例设置所选表格列的第一列的外部边框的颜色。*/
function test() {
    Selection.Columns.Item(1).Borders.OutsideColor = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例显示活动文档第一个表格的第一列内部边框的线条宽度。*/
function test() {
    alert(ActiveDocument.Tables.Item(1).Columns.Item(1).Borders.InsideLineWidth)
}
```
