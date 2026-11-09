# Endnotes.Location

返回或设置所有尾注的位置。 **[WdEndnoteLocation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdEndnoteLocation)** 类型，可读写。



## 语法

express.**Location**

express   一个代表 **Endnotes** 对象的变量。

## 类型

WdEndnoteLocation

## 示例


```JavaScript
/*本示例将所有的尾注置于节的结尾。*/
function test() {
    ActiveDocument.Endnotes.Location = wdEndOfSection
}
```


```JavaScript
/*本示例显示活动文档的第一节中的尾注的位置是否为wdEndOfDocument。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Range
    alert(range.Endnotes.Location == wdEndOfDocument)
}
```
