# Style.Font

返回或设置 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象，该对象代表指定样式的字符格式。 **Font** 类型，可读写。



## 语法

express.**Font**

express   一个代表 **Style** 对象的变量。

## 类型

Font

## 说明


要设置该属性，需指定一个返回 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象的表达式。



## 示例


```JavaScript
/*本示例将取消活动文档的“标题 1”样式中的加粗格式。*/
function test() {
    ActiveDocument.Styles.Item(wdStyleHeading1).Font.Bold = msoFalse
}
```


```JavaScript
/*本示例显示所选内容的样式的字号。*/
function test() {
    alert(Selection.Style.Font.Size + " 磅")
}
```
