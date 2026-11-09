# ColorFormat.ObjectThemeColor

返回或设置一个 **[WdThemeColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdThemeColorIndex)** 常量，该常量表示颜色格式的主题颜色。可读写。



## 语法

express.**ObjectThemeColor**

express   一个代表 **ColorFormat** 对象的变量。

## 类型

WdThemeColorIndex

## 示例


```JavaScript
/*本示例显示第一个文档上第二个形状背景色的颜色格式的主题颜色是否为 wdNotThemeColor。*/
function test() {
    let colorFormat = Documents.Item(1).Shapes.Item(2).Fill.BackColor
    alert(colorFormat.ObjectThemeColor == wdNotThemeColor)
}
```


```JavaScript
/*本示例设置活动文档中第一个形状前景色的颜色格式的主题颜色。*/
function test() {
    ActiveDocument.Shapes.Item(1).Fill.ForeColor.ObjectThemeColor = wdThemeColorMainDark2
}
```
