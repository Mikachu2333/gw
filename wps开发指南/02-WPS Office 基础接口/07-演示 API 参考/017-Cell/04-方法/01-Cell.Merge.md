# Cell.Merge

合并表格中的单元格。其结果为表格中的一个单元格。



## 语法

express.**Merge(MergeTo)**

express   一个代表 **Cell** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| MergeTo | 必选 | Cell | 要与之合并的 **Cell** 对象。 |

## 返回值

void

## 说明


对于 _MergeTo_ 参数，使用语法 `.Cell(row, column)`。

如果文件名打不开或演示文稿中包含基线，此方法会返回一个错误。



## 示例


```JavaScript
/*本示例合并活动演示文稿的第一张幻灯片的第一个表格第一行的第一个单元格和第二个单元格。*/
function test() {
    let table = ActivePresentation.Slides.Item(1).Shapes.Item(1).Table
    let cell = table.Cell(1, 1)
    cell.Merge(table.Cell(1, 2))
}
```


```JavaScript
/*本示例合并第一个演示文稿的第一张幻灯片的第一个表格第二列的第一个单元格和第二个单元格。*/
function test() {
    let table = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Table
    let cell = table.Cell(1, 2)
    cell.Merge(table.Cell(2, 2))
}
```
