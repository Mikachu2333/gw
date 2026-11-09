# Replacement.Font

返回或设置 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象，该对象代表指定对象的字符格式。 **Font** 类型，可读写。



## 语法

express.**Font**

express   一个代表 **Replacement** 对象的变量。

## 类型

Font

## 说明


要设置该属性，需指定一个返回 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象的表达式。



## 示例


```JavaScript
/*本示例将活动文档上主文档中未加粗的单词“example”设置加粗格式。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.Font.Bold = false
    find.Replacement.Font.Bold = true
    find.Execute("example", null, null, null, null, null, null, null, null, null, wdReplaceAll)
}
```


```JavaScript
/*本示例先设置所选内容的替换条件的字体格式，然后将第一个单词“example”替换“test”。*/
function test() {
    let font = Selection.Find.Replacement.Font
    font.Name = "Arial"
    font.ColorIndex = wdRed
    font.Italic = true
    Selection.Find.Execute("example", null, null, null, null, null, null, null, null, "test", wdReplaceOne)
}
```
