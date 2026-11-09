# PageNumbers.NumberStyle

返回或设置一个 **[WdPageNumberStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdPageNumberStyle)** 常量，该常量代表编号样式。可读/写。



## 语法

express.**NumberStyle**

express   一个代表 **PageNumbers** 对象的变量。

## 类型

WdPageNumberStyle

## 示例


```JavaScript
/*本示例将活动文档主页脚中的页码格式设置为小写罗马数字。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Sections.Count; i++) {
        let section = ActiveDocument.Sections.Item(i)
        let pageNumbers = section.Footers.Item(wdHeaderFooterPrimary).PageNumbers
        pageNumbers.NumberStyle = wdPageNumberStyleLowercaseRoman
    }
}
```


```JavaScript
/*本示例显示所选页眉中页码的编号样式是否为wdPageNumberStyleArabic。*/
function test() {
    let pageNumbers = Selection.HeaderFooter.PageNumbers
    alert(pageNumbers.NumberStyle == wdPageNumberStyleArabic)
}
```
