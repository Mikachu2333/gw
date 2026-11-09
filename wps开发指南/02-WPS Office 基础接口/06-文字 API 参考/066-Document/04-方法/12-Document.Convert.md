# Document.Convert

将文件转换成最新的文件格式，并启用所有新功能。



## 语法

express.**Convert()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档转换为最新的文件格式。*/
function test() {
    ActiveDocument.Convert()
}
```


```JavaScript
/*本示例判断如果第一个文档的名称为“example.docx”，则将该文档转换为最新的文件格式。*/
function test() {
    if (Documents.Item(1).Name == "example.docx") {
        Documents.Item(1).Convert()
    }
}
```
