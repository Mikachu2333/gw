# Font.TextColor

返回一个代表指定字体的颜色的 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ColorFormat/obj)** 对象。只读。



## 语法

express.**TextColor**

express   一个代表 **Font** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例将所选文本的字体颜色设置为红色。*/
function test() {
    Selection.Font.TextColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例设置活动文档的主文档文章的字体的主题颜色，并显示字体的颜色类型是否为msoColorTypeScheme。*/
function test() {
    let colorFormat = ActiveDocument.Content.Font.TextColor
    colorFormat.ObjectThemeColor = wdThemeColorText2
    alert(colorFormat.Type == msoColorTypeScheme)
}
```
