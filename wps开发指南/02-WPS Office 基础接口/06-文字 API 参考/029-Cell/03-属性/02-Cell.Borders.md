# Cell.Borders

返回一个 **Borders** 集合，该集合代表指定对象的所有边框。



## 语法

express.**Borders**

express   一个代表 **Cell** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*本示例显示活动文档第一张表格的第一行第一列单元格的边框数量*/
function test() {
    alert(Application.ActiveDocument.Tables.Item(1).Cell(1, 1).Borders.Count)
}
```


```JavaScript
/*本示例将活动文档第一张表格的第一行第一列单元格的顶部框线设置为红色*/
function test() {
    let borders = Application.ActiveDocument.Tables.Item(1).Cell(1, 1).Borders
    borders.Item(wdBorderTop).Color = RGB(255, 0, 0)
}
```
