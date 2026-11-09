# ListLevel.NumberPosition

返回或设置指定 **ListLevel** 对象的编号或项目符号的位置（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**NumberPosition**

express   一个代表 **ListLevel** 对象的变量。

## 类型

number（float 精度）

## 说明


对于每个列表级别，可设置编号或者项目符号的位置、制表位的位置和换行文字的位置。



## 示例


```JavaScript
/*本示例设置第三个多级符号列表模板的所有级别的缩进量，每个列表级别都比前一个级别多缩进 0.25 英寸（18 磅）。*/
function test() {
    let listLevels = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates.Item(3).ListLevels
    let num = 0
    for (let i = 1; i <= listLevels.Count; i++) {
        listLevels.Item(i).Alignment = wdListLevelAlignLeft
        listLevels.Item(i).NumberPosition = num
        num += 18
    }
}
```


```JavaScript
/*本示例将第七个编号列表模板的第一级的缩进量设置为 0.5 英寸。*/
function test() {
    let listLevel = Application.ListGalleries.Item(wdNumberGallery).ListTemplates.Item(7).ListLevels.Item(1)
    listLevel.Alignment = wdListLevelAlignLeft
    listLevel.NumberPosition = InchesToPoints(0.5)
}
```
