# Hyperlink.Type

返回一个 **MsoHyperlinkType** 常量，该常量代表超链接的类型。只读。



## 语法

express.**Type**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

MsoHyperlinkType

## 说明


 **Type** 属性的值可以是下列 **MsoHyperlinkType** 常量之一：

| 常量 |
| --------------------------------------------- |
| **msoHyperlinkInlineShape** 仅用于 WPS。              |
| **msoHyperlinkRange**                             |
| **msoHyperlinkShape**                             |



## 示例


```JavaScript
/*本示例判断如果活动演示文稿第一张幻灯片的第一个超链接类型为msoHyperlinkRange，则删除该超链接。*/
function test() {
    let hyperlink = ActivePresentation.Slides.Item(1).Hyperlinks.Item(1)
    if (hyperlink.Type == msoHyperlinkRange) {
        hyperlink.Delete()
    }
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片第二个超链接的类型是否为msoHyperlinkShape。*/
function test() {
    let hyperlink = ActiveWindow.Selection.SlideRange.Item(1).Hyperlinks.Item(2)
    alert(hyperlink.Type == msoHyperlinkShape)
}
```
