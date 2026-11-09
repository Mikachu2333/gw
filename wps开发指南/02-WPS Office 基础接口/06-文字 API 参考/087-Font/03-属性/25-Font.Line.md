# Font.Line

返回 **[LineFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/obj)** 对象，该对象指定行的格式。可读/写。



## 语法

express.**Line**

express   一个代表 **Font** 对象的变量。

## 类型

LineFormat

## 示例


```JavaScript
/*本示例显示所选内容的字体的线条粗细。*/
function test() {
    alert(Selection.Font.Line.Weight)
}
```


```JavaScript
/*本示例显示活动文档的主文档文章的字体的线条样式是否为单线。*/
function test() {
    let lineFormat = ActiveDocument.Content.Font.Line
    alert(lineFormat.Style == msoLineSingle)
}
```
