# ListLevel.TrailingCharacter

返回或设置在指定列表级别编号之后插入的字符。 **WdTrailingCharacter** 类型，可读写。



## 语法

express.**TrailingCharacter**

express   一个代表 **ListLevel** 对象的变量。

## 类型

WdTrailingCharacter

## 示例


```JavaScript
/*本示例设置第六个多级符号列表模板的每一级的编号和文字对齐方式，使每一级的编号后面有一个空格。*/
function test() {
    let listLevels = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates.Item(6).ListLevels
    let num = 0
    for (let i = 1; i <= listLevels.Count; i++) {
        listLevels.Item(i).Alignment = wdListLevelAlignLeft
        listLevels.Item(i).NumberPosition = num
        listLevels.Item(i).TabPosition = num
        listLevels.Item(i).TrailingCharacter = wdTrailingSpace
        num += 18
    }
}
```


```JavaScript
/*本示例显示第一个编号列表模板中最后一个列表级别编号之后是否不插入任何字符。*/
function test() {
    let listLevels = Application.ListGalleries.Item(wdNumberGallery).ListTemplates.Item(1).ListLevels
    alert(listLevels.Item(listLevels.Count).TrailingCharacter == wdTrailingNone)
}
```
