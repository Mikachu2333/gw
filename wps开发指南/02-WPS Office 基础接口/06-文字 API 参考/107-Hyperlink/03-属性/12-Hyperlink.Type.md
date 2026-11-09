# Hyperlink.Type

返回超链接的类型。只读 **MsoHyperlinkType** 类型。



## 语法

express.**Type**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

MsoHyperlinkType

## 示例


```JavaScript
/*本示例判断活动文档中最后一个超链接的类型，并通知用户。*/
function test() {
    let num = Application.ActiveDocument.Hyperlinks.Count
    let hyperlink = Application.ActiveDocument.Hyperlinks.Item(num)
    if (hyperlink.Type == msoHyperlinkRange) {
        alert("msoHyperlinkRange")
    } else if (hyperlink.Type == msoHyperlinkShape) {
        alert("msoHyperlinkShape")
    } else {
        alert("msoHyperlinkInlineShape")
    }
}
```


```JavaScript
/*本示例显示活动文档中第一个超链接的类型是否为 msoHyperlinkRange。*/
function test() {
    let hyperlink = Application.ActiveDocument.Hyperlinks.Item(1)
    alert(hyperlink.Type == msoHyperlinkRange)
}
```
