# Range.Font

返回或设置 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象，该对象代表指定对象的字符格式。 **Font** 类型，可读写。



## 语法

express.**Font**

express   一个代表 **Range** 对象的变量。

## 类型

Font

## 说明


要设置该属性，需指定一个返回 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象的表达式。



## 示例


```JavaScript
/*本示例取消所选内容的加粗格式。*/
function test() {
    Selection.Range.Font.Bold = msoFalse
}
```


```JavaScript
/*本示例在 Arial 和 Times New Roman 之间切换活动文档中第一段的字体。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    if (range.Font.Name == "Times New Roman") {
        range.Font.Name = "Arial"
    } else {
        range.Font.Name = "Times New Roman"
    }
}
```
