# Document.AddToFavorites

创建文档或超链接的快捷方式，并将其添加到“收藏夹”。



## 语法

express.**AddToFavorites()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例为所有已保存并打开的文档创建快捷方式，并将其添加到“收藏夹”文件夹。*/
function test() {
    for (let i = 1; i <= Documents.Count; i++) {
        Documents.Item(i).AddToFavorites()
    }
}
```


```JavaScript
/*本示例为“example.docx”创建快捷方式，并将其添加至“收藏夹”文件夹。如果“example.docx”还未打开，本示例将从 D:\示例 文件夹打开该文档。*/
function test() {
    let isOpen = false
    for (let i = 1; i <= Application.Documents.Count; i++) {
        let doc = Application.Documents.Item(i)
        if (doc.Name.toLowerCase() == "example.docx") {
            isOpen = true
        }
    }
    if (isOpen != true) {
        Documents.Open("D:\\示例\\example.docx")
    }
    Application.Documents.Item("example.docx").AddToFavorites()
}
```
