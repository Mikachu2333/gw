# Hyperlinks.Add

向指定的区域或形状添加超链接。返回一个 **[Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/obj)** 对象，它代表新的超链接。



## 语法

express.**Add(Anchor, Address, SubAddress, ScreenTip, TextToDisplay)**

express   一个代表 **Hyperlinks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Anchor | 必选 | Object | 超链接的位置。可为 Range 或 Shape 对象。 |
| Address | 必选 | string | 超链接的地址。 |
| SubAddress | 可选 | any | 超链接的子地址。 |
| ScreenTip | 可选 | any | 当鼠标指针停留在超链接上时所显示的屏幕提示。 |
| TextToDisplay | 可选 | any | 要显示的超链接的文本。 |

## 返回值

Object

## 说明


指定 **TextToDisplay** 参数时，文本必须是字符串。



## 示例


```JavaScript
/*本示例向单元格 A5 添加超链接。*/
function test() {
    let sheet1 = Application.Worksheets.Item(1)
    sheet1.Hyperlinks.Add(sheet1.Range("A5"), "http://www.kingsoft.com", null, "kingsoft Web Site", "kingsoft")
}
```


```JavaScript
/*本示例向单元格 B5 添加一个电子邮件超链接。*/
function test() {
    let sheet1 = Application.Worksheets.Item(1)
    sheet1.Hyperlinks.Add(sheet1.Range("B5"), "mailto:someone@example.com?subject=hello", null, "Write us today", "Support")
}
```
