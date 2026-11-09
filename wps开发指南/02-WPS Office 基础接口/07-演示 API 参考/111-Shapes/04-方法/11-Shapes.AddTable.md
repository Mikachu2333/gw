# Shapes.AddTable

将表格形状添加到幻灯片中。



## 语法

express.**AddTable(NumRows, NumColumns, Left, Top, Width, Height)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NumRows | 必选 | number（int 精度） | 表格的行数。 |
| NumColumns | 必选 | number（int 精度） | 表格的列数。 |
| Left | 可选 | number（float 精度） | 从幻灯片左边缘到表格左边缘之间的距离（以磅为单位）。 |
| Top | 可选 | number（float 精度） | 从幻灯片上边缘到表格上边缘之间的距离（以磅为单位）。 |
| Width | 可选 | number（float 精度） | 新表格的宽度（以磅为单位）。 |
| Height | 可选 | number（float 精度） | 新表格的高度（以磅为单位）。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例在当前演示文稿的第二张幻灯片上创建一张新表格，该表格具有三行四列，距离幻灯片左边缘、上边缘均为 10 磅，宽度为 288 磅（即72 * 4，一英寸为 72 磅，每列一英寸宽），高度为 216 磅。*/
function test() {
    ActivePresentation.Slides.Item(2).Shapes.AddTable(3, 4, 10, 10, 72 * 4, 72 * 3)
}
```


```JavaScript
/*本示例在第一个演示文稿的第一张幻灯片上创建一张新表格，并设置幻灯片放映期间单击该表格发生的动作的类型。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.AddTable(2, 2, 20, 20, 300, 200)
    shape.ActionSettings(ppMouseClick).Action = ppActionEndShow
}
```
