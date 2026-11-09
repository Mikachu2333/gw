# Document.WebPagePreview

显示将当前文档保存为网页时的预览。



## 语法

express.**WebPagePreview()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例显示将活动文档保存为网页时的预览。*/
function test() {
    ActiveDocument.WebPagePreview()
}
```


```JavaScript
/*本示例打开名为“example.docx”的文档，然后显示将该文档保存为网页时的预览。*/
function test() {
    let document = Documents.Open("D:\\示例\\example.docx")
    document.WebPagePreview()
}
```
