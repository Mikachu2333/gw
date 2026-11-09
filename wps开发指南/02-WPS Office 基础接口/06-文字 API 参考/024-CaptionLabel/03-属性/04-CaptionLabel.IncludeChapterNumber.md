# CaptionLabel.IncludeChapterNumber

如果页码或题注标签中包含章节号，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**IncludeChapterNumber**

express   一个代表 **CaptionLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将"标题 2"样式的章节号添至名为“example”的题注标签，设置题注编号样式，然后插入该题注标签。该文档应带有已编号的"标题 2"样式。*/
function test() {
    let captionLabel = Application.CaptionLabels.Item("example")
    captionLabel.IncludeChapterNumber = true
    captionLabel.ChapterStyleLevel = 2
    captionLabel.NumberStyle = wdCaptionNumberStyleUppercaseLetter
    Selection.InsertCaption("example", ": History")
}
```


```JavaScript
/*本示例显示第二个题注标签是否包含章节号。*/
function test() {
    let captionLabel = Application.CaptionLabels.Item(2)
    alert(captionLabel.IncludeChapterNumber)
}
```
