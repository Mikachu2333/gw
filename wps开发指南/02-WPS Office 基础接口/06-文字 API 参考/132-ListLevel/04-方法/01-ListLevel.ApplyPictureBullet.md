# ListLevel.ApplyPictureBullet

用图片项目符号设置段落或段落区域的格式。



## 语法

express.**ApplyPictureBullet(FileName)**

express   一个代表 **ListLevel** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 图片文件的路径和文件名。 |

## 返回值

InlineShape

## 示例


```JavaScript
/*本示例创建一个具有列表的新文档，并将图片符号列表格式应用于除首段和末段外的所有段落。*/
function test() {
    // Set the initial value of object variables
    let document = Documents.Add()

    // Add paragraphs to the new document, including eight list items
    Selection.TypeText("This is an introductory paragraph.")
    Selection.TypeParagraph()
    for (let i = 1; i <= 8; i++) {
        Selection.TypeText("This is a list item.")
        Selection.TypeParagraph()
    }
    Selection.TypeText("This is a concluding paragraph.")
    // Count the total number of paragraphs in the document
    let count = document.Paragraphs.Count

    // Set the range to include all paragraphs in the document except the first and the last
    let startRange = ActiveDocument.Paragraphs.Item(2).Range.Start
    let endRange = ActiveDocument.Paragraphs.Item(count - 1).Range.End
    let range = document.Range(startRange, endRange)

    // Format the list template as a bullet
    let listTemplate = Application.ListGalleries.Item(wdBulletGallery).ListTemplates.Item(7)

    // Format list with a picture bullet
    listTemplate.ListLevels.Item(1).ApplyPictureBullet("D:\\示例\\img1.png")

    // Apply the list format settings to the range
    range.ListFormat.ApplyListTemplate(listTemplate)
}
```


```JavaScript
/*本示例使用图片项目符号设置活动文档上第一个列表模板的第一个列表级别的格式，然后为所选内容使用第一个模板格式。*/
function test() {
    let listLevel = ActiveDocument.ListTemplates.Item(1).ListLevels.Item(1)
    listLevel.ApplyPictureBullet("D:\\示例\\img1.png")
    Selection.Range.ListFormat.ApplyListTemplate(ActiveDocument.ListTemplates.Item(1))
}
```
