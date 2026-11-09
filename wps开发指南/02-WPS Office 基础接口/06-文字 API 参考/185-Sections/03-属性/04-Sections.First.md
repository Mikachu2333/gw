# Sections.First

返回一个 **Section** 对象，该对象代表 **Sections** 集合中的第一个项目。



## 语法

express.**First**

express   一个代表 **Sections** 对象的变量。

## 类型

Section

## 示例


```JavaScript
/*本示例在活动文档第一节的结尾插入文本。*/
function test() {
    let range = ActiveDocument.Sections.First.Range
    range.MoveEnd(wdCharacter, -1)
    range.Collapse(wdCollapseEnd)
    range.InsertParagraphAfter()
    range.InsertAfter("End of section")
}
```


```JavaScript
/*本示例将活动文档中第一节的页面方向设置为横向。*/
function test() {
    Application.ActiveDocument.Sections.First.PageSetup.Orientation = wdOrientLandscape
}
```
