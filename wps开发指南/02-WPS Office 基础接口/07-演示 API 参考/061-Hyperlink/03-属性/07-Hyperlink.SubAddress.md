# Hyperlink.SubAddress

返回或设置与指定超链接相关联的文档中的位置，例如 WPS 文档中的书签、ET 工作表中的区域或 WPP 演示文稿中的幻灯片。可读/写 **String** 类型。



## 语法

express.**SubAddress**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置在幻灯片放映过程中，单击当前演示文稿第一张幻灯片第一个形状时，跳转到 Latest Figures.ppt 中名为“Last Quarter”的幻灯片。*/
function test() {
    let actionSetting = ActivePresentation.Slides.Item(1).Shapes.Item(1).ActionSettings.Item(ppMouseClick)
    actionSetting.Action = ppActionHyperlink
    let hyperlink = actionSetting.Hyperlink
    hyperlink.Address = "D:\\TestFile\\latest figures.ppt"
    hyperlink.SubAddress = "last quarter"
}
```


```JavaScript
/*本示例设置在幻灯片放映过程中，单击当前演示文稿第一张幻灯片第一个形状时，跳转到 Latest.xls 中 A1:B10 单元格区域。*/
function test() {
    let actionSetting = ActivePresentation.Slides.Item(1).Shapes.Item(1).ActionSettings.Item(ppMouseClick)
    actionSetting.Action = ppActionHyperlink
    let hyperlink = actionSetting.Hyperlink
    hyperlink.Address = "D:\\TestFile\\latest.xls"
    hyperlink.SubAddress = "A1:B10"
}
```
