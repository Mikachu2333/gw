# Hyperlink.AddToFavorites

创建文档或超链接的快捷方式，并将其添加到“收藏夹”。



## 语法

express.**AddToFavorites()**

express   一个代表 **Hyperlink** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例为活动文档的所有超链接创建快捷方式，并将其添加到“收藏夹”文件夹。*/
function test() {
    for (let i = 1; i <= Application.ActiveDocument.Hyperlinks.Count; i++) {
        Application.ActiveDocument.Hyperlinks.Item(i).AddToFavorites()
    }
}
```


```JavaScript
/*本示例为 MyFile.docx 创建快捷方式，并将其添加至“收藏夹”文件夹。如果 MyFile.docx 还未打开，本示例将打开该文档。*/
function test() {
    let isOpen = false
    for (let i = 1; i <= Application.Documents.Count; i++) {
        if (Application.Documents.Item(i).Name == "MyFile.docx") {
            isOpen = true
        }
    }
    if (!isOpen) {
        Application.Documents.Open("E:/MyFile.docx")
        Application.Documents.Item("MyFile.docx").AddToFavorites()
    }
}
```
