# Borders.Item

返回 **Borders** 集合中指定边框的 **[LineFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/obj)** 对象。



## 语法

express.**Item(BorderType)**

express   一个代表 **Borders** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| BorderType | 必选 | PpBorderType | 指定要返回的单元格或单元格区域的边框。 |

## 返回值

LineFormat

## 说明


_BorderType_ 参数值可以是下列 **PpBorderType** 常量之一：

| 常量 |
| ------------------------ |
| **ppBorderBottom**       |
| **ppBorderDiagonalDown** |
| **ppBorderDiagonalUp**   |
| **ppBorderLeft**         |
| **ppBorderRight**        |
| **ppBorderTop**          |



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个表格第一个单元格的顶部框线的前景填充色设置为红色。*/
function test() {
    let table = ActivePresentation.Slides.Item(1).Shapes.Item(1).Table
    let borders = table.Cell(1, 1).Borders
    borders.Item(ppBorderTop).ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例设置活动窗口所选表格的第一行的所有单元格的底部框线的虚线线型。*/
function test() {
    let table = ActiveWindow.Selection.ShapeRange.Table
    let borders = table.Rows.Item(1).Cells.Borders
    borders.Item(ppBorderBottom).DashStyle = msoLineDash
}
```
