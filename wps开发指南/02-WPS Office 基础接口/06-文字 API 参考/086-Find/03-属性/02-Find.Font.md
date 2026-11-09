# Find.Font

返回或设置 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象，该对象代表指定对象的字符格式。 **Font** 类型，可读写。



## 语法

express.**Font**

express   一个代表 **Find** 对象的变量。

## 类型

Font

## 说明


要设置该属性，需指定一个返回 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象的表达式。



## 示例


```JavaScript
/*本示例查找并删除下一处“Times New Roman”字体格式的文本。*/
function test() {
    let find = Selection.Find
    find.ClearFormatting()
    find.Font.Name = "Times New Roman"
    find.Execute("", null, null, null, null, null, true, null, true, "")
}
```


```JavaScript
/*本示例在活动文档的主文档文章中查找所有字号为12的加粗文本“Hello”，并且将其替换为“exmple”。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.Font.Bold = true
    find.Font.Size = 12
    find.Execute("Hello", null, null, null, null, null, null, null, null, "exmple")
}
```
