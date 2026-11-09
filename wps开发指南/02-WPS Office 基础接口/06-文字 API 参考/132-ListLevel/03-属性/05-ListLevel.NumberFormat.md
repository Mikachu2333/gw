# ListLevel.NumberFormat

返回或设置指定列表级别的数字格式。可读/写 **String** 类型。



## 语法

express.**NumberFormat**

express   一个代表 **ListLevel** 对象的变量。

## 类型

string

## 说明


百分号（%）后跟从 1 到 9 的任意数字，可代表不同列表级别的编号样式。例如，如果要将第一级的格式设置为“Article I”，第二级的格式设置为“Article II”，依此类推，则 **NumberFormat** 属性的字符串将为“Article %1”，且 **[NumberStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevel/member/NumberStyle)** 属性将设置为 **wdListNumberStyleUpperCaseRoman** 。

如果将 **NumberStyle** 属性设置为 **wdListNumberStyleBullet** ，则 **NumberFormat** 属性的字符串只能包含一个字符。



## 示例


```JavaScript
/*本示例创建一个列表模板，该模板各级依次缩进，并用阿拉伯数字和句点设置各级的格式，再将新的列表模板应用于所选内容。*/
function test() {
    let listTemplate = ActiveDocument.ListTemplates.Add(true)
    for (let i = 1; i <= 9; i++) {
        let listLevel = listTemplate.ListLevels.Item(i)
        listLevel.NumberStyle = wdListNumberStyleArabic
        listLevel.NumberPosition = Application.InchesToPoints(0.25 * (i - 1))
        listLevel.TextPosition = Application.InchesToPoints(0.25 * i)
        listLevel.NumberFormat = '%' + i + '.'
    }
    Selection.Range.ListFormat.ApplyListTemplate(listTemplate)
}
```


```JavaScript
/*本示例显示“项目符号和编号”对话框中“编号”选项卡上第一个列表模板（不包括“无”选项）中最后一个列表级别的数字格式。*/
function test() {
    let listLevels = Application.ListGalleries.Item(wdNumberGallery).ListTemplates.Item(1).ListLevels
    alert(listLevels.Item(listLevels.Count).NumberFormat)
}
```
