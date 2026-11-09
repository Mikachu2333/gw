# PageNumber.Alignment

返回或设置一个 **WdPageNumberAlignment** 常量，该常量代表页码的对齐方式，可读写。



## 语法

express.**Alignment**

express   一个代表 **PageNumber** 对象的变量。

## 类型

WdPageNumberAlignment

## 示例


```JavaScript
/*本示例显示活动文档上第一节的主页眉的第一个页码的对齐方式是否为左对齐。*/
function test() {
    let pageNumber = ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).PageNumbers.Item(1)
    alert(pageNumber.Alignment == wdAlignPageNumberLeft)
}
```


```JavaScript
/*本示例将所选页脚的第一个页码的对齐方式设置为居中对齐。*/
function test() {
    let pageNumber = Selection.HeaderFooter.PageNumbers.Item(1)
    pageNumber.Alignment = wdAlignPageNumberCenter
}
```
