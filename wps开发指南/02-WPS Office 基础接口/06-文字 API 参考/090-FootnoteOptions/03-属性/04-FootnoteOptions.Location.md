# FootnoteOptions.Location

返回或设置所有脚注的位置。 **WdFootnoteLocation** 类型，可读写。



## 语法

express.**Location**

express   一个代表 **FootnoteOptions** 对象的变量。

## 类型

WdFootnoteLocation

## 示例


```JavaScript
/*本示例将所选内容中所有脚注的位置设置为wdBottomOfPage。*/
function test() {
    Selection.FootnoteOptions.Location = wdBottomOfPage
}
```


```JavaScript
/*本示例显示活动文档上第一节中所有脚注的位置是否为wdBeneathText。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Range
    alert(range.FootnoteOptions.Location == wdBeneathText)
}
```
