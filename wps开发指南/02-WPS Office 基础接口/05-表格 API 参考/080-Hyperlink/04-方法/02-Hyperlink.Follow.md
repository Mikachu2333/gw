# Hyperlink.Follow

如果已经下载指定文档，则显示缓冲区中的该文档。否则，本方法对指定超链接进行处理以下载目标文档，然后将该文档在适当的应用程序中显示出来。



## 语法

express.**Follow(NewWindow, AddHistory, ExtraInfo, Method, HeaderInfo)**

express   一个代表 **Hyperlink** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NewWindow | 可选 | any | 如果为 True，则在新窗口中显示目标应用程序。默认值为 False。 |
| AddHistory | 可选 | any | 未使用。保留供将来使用。 |
| ExtraInfo | 可选 | any | 指定解析超链接时要使用的 HTTP 附加信息的 String 或字节数组。例如，可以使用 ExtraInfo 指定图像的坐标、窗体的内容或 FAT 文件名。 |
| Method | 可选 | any | 指定附加 ExtraInfo 的方法。可以是下列 MsoExtraInfoMethod 常量之一。 |
| HeaderInfo | 可选 | any | 指定 HTTP 请求的标题信息的 String。默认值为空字符串。 |

## 返回值

void

## 示例


```JavaScript
/*本示例加载附于第一个形状（第一张工作表中）的超链接的文档*/
function test() {
    Application.Worksheets.Item(1).Shapes.Item(1).Hyperlink.Follow(true)
}
```


```JavaScript
/*本示例打开单元格C5的第一项超链接*/
function test() {
    let hl = Range("C5").Hyperlinks.Item(1)
    hl.Follow()
}
```
