# Section.Range

返回一个 **Range** 对象，该对象代表指定对象中包含的文档部分。



## 语法

express.**Range**

express   一个代表 **Section** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例在活动文档中第一节的结尾插入文本。*/
function test() {
    let range = Application.ActiveDocument.Sections.Item(1).Range
    range.MoveEnd(wdCharacter, -1)
    range.Collapse(wdCollapseEnd)
    range.InsertParagraphAfter()
    range.InsertAfter("End of section")
}
```


```JavaScript
/*本示例显示活动文档中第一节的文档部分的文本内容。*/
function test() {
    let range = Application.ActiveDocument.Sections.Item(1).Range
    alert(range.Text)
}
```
