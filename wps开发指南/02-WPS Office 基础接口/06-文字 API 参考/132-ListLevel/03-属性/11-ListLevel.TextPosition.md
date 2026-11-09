# ListLevel.TextPosition

返回或设置指定 **ListLevel** 对象的第二行换行文字的位置（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**TextPosition**

express   一个代表 **ListLevel** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例设置第一个多级符号列表模板的所有级别的缩进量。每一列表级别比上一级别缩进 0.5 英寸（36 磅），制表位设为距编号 0.25 英寸（18 磅），换行文字从编号缩进 0.25 英寸（18 磅）。*/
function test() {
    let listLevels = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates.Item(1).ListLevels
    let num = 0
    for (let i = 1; i <= listLevels.Count; i++) {
        listLevels.Item(i).Alignment = wdListLevelAlignLeft
        listLevels.Item(i).NumberPosition = num
        listLevels.Item(i).TrailingCharacter = wdTrailingTab
        listLevels.Item(i).TabPosition = num + 18
        listLevels.Item(i).TextPosition = num + 18
        num += 36
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个列表模板的第一个列表级别的第二行换行文本的位置。*/
function test() {
    let listLevel = Documents.Item(1).ListTemplates.Item(1).ListLevels.Item(1)
    alert(`换行文本从编号缩进：${listLevel.TextPosition} 磅`)
}
```
