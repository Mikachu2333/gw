# Style.LinkToListTemplate

将指定的样式与一个列表模板链接，如此该样式中的格式就可以应用于列表。



## 语法

express.**LinkToListTemplate(ListTemplate, ListLevelNumber)**

express   一个代表 **Style** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ListTemplate | 必选 | ListTemplate | 与样式相链接的列表模板。 |
| ListLevelNumber | 可选 | any | 对应样式所链接到的列表级的整数。如果省略该参数，则使用样式的级别。 |

## 返回值

void

## 示例


```JavaScript
/*本示例创建一个新的列表模板，接着将 1 到 9 的标题样式与 1 到 9 的列表级别相链接，然后将新列表模板应用于文档。任何应用标题样式的段落都根据列表模板进行编号。*/
function test() {
    let listTemplate = ActiveDocument.ListTemplates.Add(true)
    for (let i = 1; i <= 9; i++) {
        let listLevel = listTemplate.ListLevels.Item(i)
        listLevel.NumberStyle = wdListNumberStyleArabic
        listLevel.NumberPosition = InchesToPoints(0.25 * (i - 1))
        listLevel.TextPosition = InchesToPoints(0.25 * i)
        listLevel.NumberFormat = `%${i}.`
        let style = ActiveDocument.Styles.Item("标题 " + i)
        style.LinkToListTemplate(listTemplate)
    }
    ActiveDocument.Content.ListFormat.ApplyListTemplate(listTemplate)
}
```


```JavaScript
/*本示例设置所选区域的样式与“项目符号和编号”对话框中“多级符号”选项卡上第一个列表模板的第四个级别相链接。*/
function test() {
    let listTemplate = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates.Item(1)
    Selection.Range.Style.LinkToListTemplate(listTemplate, 4)
}
```
