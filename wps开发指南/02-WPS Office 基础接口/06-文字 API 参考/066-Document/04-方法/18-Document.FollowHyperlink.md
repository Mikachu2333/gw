# Document.FollowHyperlink

显示一个缓存文档（如果该文档已下载）。否则，此方法将解析该超链接，下载目标文档，并在相应的应用程序中显示此文档。



## 语法

express.**FollowHyperlink(Address, SubAddress, NewWindow, AddHistory, ExtraInfo, Method, HeaderInfo)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Address | 可选 | any | 目标文档的地址。 |
| SubAddress | 可选 | any | 目标文档中的位置。默认值为一个空字符串。 |
| NewWindow | 可选 | any | 如果该属性值为 **True** ，则在新窗口中显示目标位置。默认值为 **False** 。 |
| AddHistory | 可选 | any | 如果该属性值为 **True** ，则向当前的历史记录文件夹中加入链接。 |
| ExtraInfo | 可选 | any | 指定用于解析超链接的 HTTP 附加信息的字符串或字节数组。例如，您可以使用 ExtraInfo 来指定图像映射的坐标、窗体的内容或 FAT 文件的名称。根据 Method 的值来决定是发布还是附加该字符串。可使用 ExtraInfoRequired 属性确定是否需要额外信息。 |
| Method | 可选 | any | 指定 HTTP 附加信息的处理方式。可以是任何 **MsoExtraInfoMethod** 常量。 |
| HeaderInfo | 可选 | any | 指定 HTTP 请求的标题信息的字符串。默认值为一个空字符串。可以使用以下语法将几个标题行合并成一个字符串："string1" + "\r" + "string2"。指定的字符串自动转换为 ANSI 字符。请注意，HeaderInfo 参数可能会覆盖默认的 HTTP 标题字段。 |

## 返回值

void

## 示例


```JavaScript
/*本示例根据指定的 URL 地址在新窗口显示 WPS 主页。*/
function test() {
    Application.ActiveDocument.FollowHyperlink("http://www.wps.cn", null, true, true)
}
```


```JavaScript
/*本示例根据指定的 URL 地址在新窗口显示 WPS 开放平台主页。*/
function test() {
    Documents.Item(1).FollowHyperlink("https://open.wps.cn/", null, true, false)
}
```
