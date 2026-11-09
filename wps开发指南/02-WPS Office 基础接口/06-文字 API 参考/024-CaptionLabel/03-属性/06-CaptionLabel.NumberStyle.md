# CaptionLabel.NumberStyle

返回或设置 **CaptionLabel** 对象的编号样式。 **WdCaptionNumberStyle** 类型，可读写。



## 语法

express.**NumberStyle**

express   一个代表 **CaptionLabel** 对象的变量。

## 类型

WdCaptionNumberStyle

## 说明


由于您选择或安装的语言支持不同（例如美国英语），上述部分常量可能无法使用。



## 示例


```JavaScript
/*本示例在插入点插入一个题注。该题注字母的格式为大写。*/
function test() {
    let captionLabel = Application.CaptionLabels.Item("example")
    captionLabel.NumberStyle = wdCaptionNumberStyleUppercaseLetter
    Selection.Collapse(wdCollapseEnd)
    Selection.InsertCaption("example")
}
```


```JavaScript
/*本示例显示第二个题注标签的编号样式是否为wdCaptionNumberStyleArabic。*/
function test() {
    let captionLabel = Application.CaptionLabels.Item(2)
    alert(captionLabel.NumberStyle == wdCaptionNumberStyleArabic)
}
```
