# Workbook.FollowHyperlink

如果已经下载指定文档，则显示缓冲区中的该文档。否则，本方法对指定超链接进行处理以下载目标文档，然后将该文档在适当的应用程序中显示出来。



## 语法

express.**FollowHyperlink(Address, SubAddress, NewWindow, AddHistory, ExtraInfo, Method, HeaderInfo)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Address | 必选 | string | 目标文档的地址。 |
| SubAddress | 可选 | any | 目标文档中的位置。默认值为空字符串。 |
| NewWindow | 可选 | any | 如果为 **True** ，则在新窗口中显示目标应用程序。默认值为 **False** 。 |
| AddHistory | 可选 | any | 未使用。保留供将来使用。 |
| ExtraInfo | 可选 | any | 指定解析超链接时要使用的 HTTP 附加信息的 **String** 或字节数组。例如，可以使用 _ExtraInfo_ 指定图像的坐标、窗体的内容或 FAT 文件名。 |
| Method | 可选 | any | 指定附加 _ExtraInfo_ 的方法。可以是 **[MsoExtraInfoMethod](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoExtraInfoMethod)** 常量之一。 |
| HeaderInfo | 可选 | any | 指定 HTTP 请求的标题信息的 **String** 。默认值为空字符串。 |

## 返回值

void

## 说明


| **MsoExtraInfoMethod** 类型可以是下列 **MsoExtraInfoMethod** 常量之一。 |
| ----------------------------------------------------------- |
| **msoMethodGet** 。ExtraInfo 为追加到地址的 **String** 。              |
| **msoMethodPost** 。ExtraInfo 以 **String** 或字节数组形式发送。         |



## 示例


```JavaScript
/*本示例将 https://www.wps.cn/ 中的文档加载到一个浏览器窗口，并将其添加到“历史记录”文件夹。*/
function test() {
    ActiveWorkbook.FollowHyperlink("https://www.wps.cn/")
}
```


```JavaScript
/*本示例将 https://www.kingsoft.com/ 中的文档加载到一个新浏览器窗口，并将其添加到“历史记录”文件夹。*/
function test() {
    Workbooks.Item(1).FollowHyperlink("https://www.kingsoft.com/", null, true)
}
```
