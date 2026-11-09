# PageNumber.Cut

将指定对象从文档中移到剪贴板上。



## 语法

express.**Cut()**

express   一个代表 **PageNumber** 对象的变量。

## 返回值

void

## 说明


如果表达式返回 **Range** 或 **Selection** 对象，则将该对象中的内容移动到剪贴板上，但折叠的对象仍保留在文档中。



## 示例


```JavaScript
/*本示例将活动文档上第一节的主页眉的第一个页码移到剪贴板上，然后粘贴到光标处。*/
function test() {
    let pageNumber = ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).PageNumbers.Item(1)
    pageNumber.Cut()
    Selection.Paste()
}
```


```JavaScript
/*本示例将所选页脚的第一个页码移到剪贴板上。*/
function test() {
    let pageNumber = Selection.HeaderFooter.PageNumbers.Item(1)
    pageNumber.Cut()
}
```
