# Application.DefaultSaveFormat

返回或设置将在 **“另存为”** 对话框上的 **“保存类型”** 框中显示的默认格式。 **String** 类型，可读写。



## 语法

express.**DefaultSaveFormat**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 说明


本属性所用字符串是文件转换程序类名。WPS 内部格式的类名列于下表。

| WPS格式     | 文件转化程序类名  |
| --------- | --------- |
| WPS文档     | ""        |
| 文档模板      | "Dot"     |
| 纯文本       | "Text"    |
| 带换行符的纯文本  | "CRText"  |
| MS-DOS 文本 | "8Text"   |
| 带换行符的 MS-DOS 文本 | "8CRText"   |
| RTF格式     | "Rtf"     |
| Unicode文本 | "Unicode" |

使用 **[FileConverter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FileConverter/obj)** 对象的 **[ClassName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FileConverter/member/ClassName)** 属性可以确定外部文件转换器的类名。



## 示例


```JavaScript
/*本示例将默认的保存格式设置为 WPS 文档格式。*/
function test() {
    Application.DefaultSaveFormat = ""
}
```


```JavaScript
/*此示例显示 WPS 用来保存文档的当前设置。*/
function test() {
    alert(Application.DefaultSaveFormat)
}
```
