# CaptionLabel.Separator

返回或设置章节编号和序号间的字符。可读/写 **WdSeparatorType** 类型。



## 语法

express.**Separator**

express   一个代表 **CaptionLabel** 对象的变量。

## 类型

WdSeparatorType

## 示例


```JavaScript
/*本示例插入一个名为“example”的题注标签，在章节编号和序号间有一个冒号（:）。*/
function test() {
    let captionLabel = Application.CaptionLabels.Item("example")
    captionLabel.Separator = wdSeparatorColon
    captionLabel.IncludeChapterNumber = true
    Selection.InsertCaption("example")
}
```


```JavaScript
/*本示例显示第一个题注标签的章节编号和序列编号间的字符是否为wdSeparatorHyphen。*/
function test() {
    let captionLabel = Application.CaptionLabels.Item(1)
    alert(captionLabel.Separator == wdSeparatorHyphen)
}
```
