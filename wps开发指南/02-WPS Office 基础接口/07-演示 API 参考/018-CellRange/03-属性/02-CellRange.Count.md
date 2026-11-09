# CellRange.Count

返回指定集合中的对象数。只读。



## 语法

express.**Count**

express   一个代表 **CellRange** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一个表格第一行单元格的数量。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let cellRange = shape.Table.Rows.Item(1).Cells
    alert(cellRange.Count)
}
```
