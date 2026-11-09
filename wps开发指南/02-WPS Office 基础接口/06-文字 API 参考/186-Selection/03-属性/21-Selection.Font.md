# Selection.Font

返回或设置一个 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象，该对象代表指定对象的字符格式。可读写。



## 语法

express.**Font**

express   一个代表 **Selection** 对象的变量。

## 类型

Font

## 示例


```JavaScript
/*本示例显示选定文本的字体。*/
function test() {
    alert(Selection.Font.Name)
}
```


```JavaScript
/*本示例将选定文本的字符格式应用于活动文档的第一段。*/
function test() {
    let Font = Selection.Font.Duplicate
    ActiveDocument.Paragraphs(1).Range.Font = Font
}
```
