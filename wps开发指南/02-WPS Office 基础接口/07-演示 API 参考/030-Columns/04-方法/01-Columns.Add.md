# Columns.Add

向现有表格中添加一个新列。返回一个代表新表格列的 **[Column](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Column/obj)** 对象。



## 语法

express.**Add(BeforeColumn)**

express   一个代表 **Columns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| BeforeColumn | 可选 | number（int 精度） | 指定将在其前面插入新列的表格列的索引号。 |

## 返回值

Column

## 说明


_BeforeColumn_ 参数的值必须介于 1 和表格列数（不包含二者）之间。其默认值为 -1，表示如果省略 _BeforeColumn_ 参数，则添加的新列将作为表格中的最后一列。



## 示例


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片的第一个表格第一列前添加一列。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let columns = shape.Table.Columns
    columns.Add(1)
}
```


```JavaScript
/*本示例在活动窗口所选表格的最后一列前添加一列。*/
function test() {
    let table = ActiveWindow.Selection.ShapeRange.Table
    let columns = table.Columns
    columns.Add(table.Columns.Count)
}
```
