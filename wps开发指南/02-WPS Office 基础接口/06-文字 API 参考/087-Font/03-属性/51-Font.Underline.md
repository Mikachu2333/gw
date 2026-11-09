# Font.Underline

返回或设置应用于字体的下划线类型。可读写 **[WdUnderline](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdUnderline)** 类型。



## 语法

express.**Underline**

express   一个代表 **Font** 对象的变量。

## 类型

WdUnderline

## 示例


```JavaScript
/*本示例给所选内容添加单下划线。*/
function test() {
    if (Application.Selection.Type === wdSelectionNormal) {
        Application.Selection.Font.Underline = wdUnderlineSingle
    } else {
        alert("You need to select some text.")
    }
}
```


```JavaScript
/*本示例设置活动文档的主文档文章的字体的颜色和下划线类型。*/
function test() {
    let font = ActiveDocument.Content.Font
    font.TextColor.RGB = RGB(255, 0, 0)
    font.Underline = wdUnderlineWavyDouble
}
```
