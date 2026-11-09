# WebOptions.UseDefaultFolderSuffix

根据选定或安装的语言，将含指定文档的文件夹后缀设置为默认后缀。



## 语法

express.**UseDefaultFolderSuffix()**

express   一个代表 **WebOptions** 对象的变量。

## 返回值

void

## 说明


将文档保存为网页、使用长文件名以及选择在单独的文件夹中保存支持文件（即，如果 **UseLongFileNames** 和 **OrganizeInFolder** 属性设置为 **True** ）时，WPS 使用文件夹后缀。

此后缀出现在文件夹名中文档名的后面。例如：如果文档名为“Doc1”并且语言为英语，则文件夹名为“Doc1\_files”。可用的文件夹后缀都列在 **FolderSuffix** 属性主题中。



## 示例


```JavaScript
/*本示例将活动文档的文件夹后缀设置为默认后缀。*/
function test() {
    ActiveDocument.WebOptions.UseDefaultFolderSuffix()
}
```


```JavaScript
/*本示例判断如果第一个文档的名称为“example.docx”，则当该文档另存为网页时将文件夹后缀设置为默认后缀。*/
function test() {
    if (Documents.Item(1).Name == "example.docx") {
        Documents.Item(1).WebOptions.UseDefaultFolderSuffix()
    }
}
```
