# Cells.Count

返回 **Cells** 集合中的项目数。 **Number** 类型，只读。



## 语法

express.**Count**

express   一个代表 **Cells** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例显示活动文档中第一个表格首行单元格的数量*/
function test() {
    let rowsCellsCount = Application.ActiveDocument.Tables.Item(1).Rows.Item(1).Cells.Count
    alert(rowsCellsCount)
}
```
