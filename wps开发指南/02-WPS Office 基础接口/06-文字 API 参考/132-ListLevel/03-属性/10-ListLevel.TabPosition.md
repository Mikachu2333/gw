# ListLevel.TabPosition

返回或设置指定 **ListLevel** 对象的制表符位置。 **Single** 类型，可读写。



## 语法

express.**TabPosition**

express   一个代表 **ListLevel** 对象的变量。

## 类型

number（float 精度）

## 说明


由于 **ListLevel** 对象没有默认制表符设置， **TabPosition** 属性总是返回一个为 999999 的值或 **wdUndefined** ，除非将该属性设置为一个值。



## 示例


```JavaScript
/*此示例设置每个列表级别编号，使其与上一级缩进 0.5 英寸（36 磅），并将制表符设置为与编号相距 0.25 英寸（18 磅）。*/
function test() {
    let listLevels = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates.Item(1).ListLevels
    let num = 0
    for (let i = 1; i <= listLevels.Count; i++) {
        listLevels.Item(i).Alignment = wdListLevelAlignLeft
        listLevels.Item(i).NumberPosition = num
        listLevels.Item(i).TrailingCharacter = wdTrailingTab
        listLevels.Item(i).TabPosition = num + 18
        num += 36
    }
}
```


```JavaScript
/*本示例设置第一个编号列表模板的第一个级别的制表符的位置，然后将该列表模板应用于选定内容。*/
function test() {
    let listTemplate = Application.ListGalleries.Item(wdNumberGallery).ListTemplates.Item(1)
    listTemplate.ListLevels.Item(1).TabPosition = Application.InchesToPoints(1)
    Selection.Range.ListFormat.ApplyListTemplate(listTemplate)
}
```
