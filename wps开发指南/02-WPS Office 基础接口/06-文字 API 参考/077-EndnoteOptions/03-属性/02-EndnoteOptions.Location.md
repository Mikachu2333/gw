# EndnoteOptions.Location

返回或设置所有尾注的位置。 **WdEndnoteLocation** 类型，可读写。



## 语法

express.**Location**

express   一个代表 **EndnoteOptions** 对象的变量。

## 类型

WdEndnoteLocation

## 示例


```JavaScript
/*本示例将所选内容中的尾注置于节的结尾。*/
function test() {
    Selection.EndnoteOptions.Location = wdEndOfSection
}
```


```JavaScript
/*本示例显示活动文档上第一节的文档部分中尾注的位置是否为wdEndOfDocument。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Range
    alert(range.EndnoteOptions.Location == wdEndOfDocument)
}
```
