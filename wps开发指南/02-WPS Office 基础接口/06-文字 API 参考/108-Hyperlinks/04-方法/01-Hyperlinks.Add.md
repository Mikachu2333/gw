# Hyperlinks.Add

返回一个 **Hyperlink** 对象，该对象代表添加到区域、选定内容或文档的新的超链接。



## 语法

express.**Add(Anchor, Address, SubAddress, ScreenTip, TextToDisplay, Target)**

express   一个代表 **Hyperlinks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Anchor | 必选 | Object | 要转换为超链接的文本或图形。 |
| Address | 可选 | any | 指定链接的地址。此地址可以是电子邮件地址、Internet 地址或文件名。请注意，WPS 不检查该地址的正确性。 |
| SubAddress | 可选 | any | 目标文件内的位置名，如书签、已命名的区域或幻灯片编号。 |
| ScreenTip | 可选 | any | 当鼠标指针放在指定超链接上时显示为“屏幕提示”的文本。默认值为“地址”。 |
| TextToDisplay | 可选 | any | 指定超链接的显示文本。该参数的值将取代由 Anchor 指定的文本或图形。 |
| Target | 可选 | any | 要在其中加载指定超链接的框架或窗口的名字。 |

## 返回值

Hyperlink

## 示例


```JavaScript
/*本示例将选定内容转换为指向 wps 官网地址的超链接。*/
function test() {
    Application.ActiveDocument.Hyperlinks.Add(Selection.Range, "https://www.wps.cn")
}
```


```JavaScript
/*本示例将选定内容转换为链接到 MyFile.docx 中名为 MyBookMark 的书签的超链接。*/
function test() {
    Application.ActiveDocument.Hyperlinks.Add(Selection.Range, "E:/MyFile.docx", "MyBookMark")
}
```


```JavaScript
/*本示例将选定内容中的第一个图形定义为超链接。*/
function test() {
    Application.ActiveDocument.Hyperlinks.Add(Selection.ShapeRange.Item(1), "https://www.wps.cn")
}
```
