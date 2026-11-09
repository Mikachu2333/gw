# Document.Path

返回文档的磁盘或 Web 路径。只读 **String** 类型。



## 语法

express.**Path**

express   一个代表 **Document** 对象的变量。

## 类型

string

## 说明


此路径不包括尾随字符，例如，“C:\\WPSOffice”或“http\://MyServer”。除非请求存储在网络驱动器根目录中的文档的路径（例如，对于 N:\\file.docx，如果 N 是网络驱动器，则返回 “N:\\”，而对于 C:\\file.docx，如果 C 是本地驱动器，则返回 “C:”）。

使用 **PathSeparator** 属性可添加分隔文件夹与驱动器号的字符。使用 **Name** 属性可返回不带路径的文件名，而使用 **FullName** 属性可同时返回文件名和路径。

可以使用 **PathSeparator** 属性建立 Web 地址，即使地址中包含正斜杠（/）（ **PathSeparator** 属性默认使用反斜杠（\\））。



## 示例


```JavaScript
/*本示例显示活动文档的路径和文件名。*/
function test() {
    alert(ActiveDocument.Path + Application.PathSeparator + ActiveDocument.Name)
}
```


```JavaScript
/*本示例在光标处插入第一个文档的路径。*/
function test() {
    Selection.TypeText(Documents.Item(1).Path)
}
```
