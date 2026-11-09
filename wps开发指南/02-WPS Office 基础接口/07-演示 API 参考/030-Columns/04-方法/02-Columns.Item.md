# Columns.Item

从指定的 **Columns** 集合中返回单个 **Column** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Columns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 集合中要返回的单个 **Column** 对象的索引号。 |

## 返回值

Column

## 示例


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片的第一个表格第一列。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let column = shape.Table.Columns.Item(1)
    column.Delete()
}
```


```JavaScript
/*本示例显示第一个窗口所选表格的最后一列的宽度。*/
function test() {
    let table = Windows.Item(1).Selection.ShapeRange.Table
    let column = table.Columns.Item(table.Columns.Count)
    alert(column.Width + " 磅")
}
```
