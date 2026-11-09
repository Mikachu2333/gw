# Footnotes.Location

返回或设置所有脚注的位置。可读写， **[WdFootnoteLocation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdFootnoteLocation)** 类型。



## 语法

express.**Location**

express   一个代表 **Footnotes** 对象的变量。

## 类型

WdFootnoteLocation

## 示例


```JavaScript
/*本示例将活动文档上所有脚注置于每页的底端。*/
function test() {
    ActiveDocument.Footnotes.Location = wdBottomOfPage
}
```


```JavaScript
/*本示例显示所选内容中所有脚注是否位于文本下方。*/
function test() {
    alert(Selection.Footnotes.Location == wdBeneathText)
}
```
