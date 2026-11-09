# PageNumber.Copy

将指定的页码复制到剪贴板上。



## 语法

express.**Copy()**

express   一个代表 **PageNumber** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档上第一节的主页眉的第一个页码复制到剪贴板上，然后粘贴到光标处。*/
function test() {
    let pageNumber = ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).PageNumbers.Item(1)
    pageNumber.Copy()
    Selection.Paste()
}
```


```JavaScript
/*本示例将所选页脚的第一个页码复制到剪贴板上。*/
function test() {
    let pageNumber = Selection.HeaderFooter.PageNumbers.Item(1)
    pageNumber.Copy()
}
```
