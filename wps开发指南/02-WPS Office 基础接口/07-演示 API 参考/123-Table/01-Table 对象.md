# Table 对象

代表幻灯片上的表格形状。Table 对象是 Shape 的成员。Table 对象包含 Columns 集合和 Rows 集合。

## 说明


使用 **Shapes** (*Index*) （其中 *Index* 为数字）返回包含表格的形状。使用 **[HasTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/HasTable)** 属性可查看形状是否包含表格。


## 示例


```JavaScript
/*本示例遍历活动演示文稿上第二张幻灯片中所有形状，判断如果形状中包含表格，则将表格的第一行的行高设置为 50 磅*/
function test() {
    let shapes = ActivePresentation.Slides.Item(2).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).HasTable) {
            shapes.Item(i).Table.Rows.Item(1).Height = 50
        }
    }
}
```
使用 **Table** 对象的 **[Cell](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Table/member/Cell)** 方法访问每个单元格的内容。



```JavaScript
/*本示例将文本“Cell 1”插入活动演示文稿第三张幻灯片上第五个形状中表格的第一个单元格。*/
function test() {
    let table = ActivePresentation.Slides.Item(3).Shapes.Item(5).Table
    table.Cell(1, 1).Shape.TextFrame.TextRange.Text = "Cell 1"
}
```
使用 **[AddTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddTable)** 方法向幻灯片中添加一个表格。



```JavaScript
/*本示例在活动演示文稿上第二张幻灯片中添加一个 3x3 表格。*/
function test() {
    ActivePresentation.Slides.Item(2).Shapes.AddTable(3, 3)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Cell](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Table/member/Cell) | 返回一个 Cell 对象，该对象代表表格中的一个单元格。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Table/member/Application) | 返回一个 Application 对象，该对象表示指定对象的创建者。 |
| [Columns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Table/member/Columns) | 返回一个 **Columns** 集合，该集合代表表格中的所有列。只读。 |
| [FirstCol](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Table/member/FirstCol) | 如果该属性值为 True，则显示指定表格的第一列的特殊格式。可读/写。 |
| [FirstRow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Table/member/FirstRow) | 如果该属性值为 True，则显示指定表格的第一行的特殊格式。可读/写。 |
| [Rows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Table/member/Rows) | 返回一个 **[Rows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Rows/obj)** 集合，该集合代表表格中的所有行。只读。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Table/member/Style) | 返回一个 **[TableStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TableStyle/obj)** 对象，该对象包含有关指定表格的当前表格样式的信息。只读。 |