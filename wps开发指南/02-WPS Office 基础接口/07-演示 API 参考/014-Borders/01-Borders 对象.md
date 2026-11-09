# Borders 对象

 **[LineFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/obj)** 对象的集合，代表表格中某个单元格或单元格范围的边框和对角线。

## 说明


每个 **Cell** 对象或 **CellRange** 集合在 **Borders** 集合中都具有六个元素。用户不能向 **Borders** 集合中添加对象。

使用 **Borders** (_index_) 返回单个 **Border** 对象，其中 _index_ 标识单元格的边框线或对角线。_index_ 值可以是任何 **PPBorderType** 常量。

| 常量 |
| ------------------------ |
| **ppBorderBottom**       |
| **ppBorderDiagonalDown** |
| **ppBorderDiagonalUp**   |
| **ppBorderLeft**         |
| **ppBorderRight**        |
| **ppBorderTop**          |

使用 [ **DashStyle** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/DashStyle) 属性可将虚线样式应用于 **Border** 对象。


## 示例


```JavaScript
/*本示例设置活动窗口所选表格的第二行的所有单元格的底部框线的虚线线型。*/
function test() {
    let table = ActiveWindow.Selection.ShapeRange.Table
    let borders = table.Rows.Item(2).Cells.Borders
    borders.Item(ppBorderBottom).DashStyle = msoLineDash
}
```


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片的第一个表格第二行的第一个单元格的左侧框线的前景填充色和线条粗细。*/
function test() {
    let table = ActivePresentation.Slides.Item(1).Shapes.Item(1).Table
    let borders = table.Cell(2, 1).Borders
    borders.Item(ppBorderLeft).ForeColor.RGB = RGB(0, 0, 255)
    borders.Item(ppBorderLeft).Weight = 2
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Borders/member/Item) | 返回 **Borders** 集合中指定边框的 **[LineFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/obj)** 对象。 |