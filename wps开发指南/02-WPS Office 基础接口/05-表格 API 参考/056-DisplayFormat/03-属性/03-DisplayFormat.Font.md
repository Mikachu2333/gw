# DisplayFormat.Font

返回一个 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/obj)** 对象，该对象代表当前用户界面中显示的关联 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 的字体。只读。



## 语法

express.**Font**

express   一个代表 **DisplayFormat** 对象的变量。

## 类型

Font

## 示例


```JavaScript
/*此示例显示第一个工作表中 A3 单元格文本的字体大小。*/
function test() {
    alert(Worksheets.Item(1).Range("A3").DisplayFormat.Font.Size)
}
```


```JavaScript
/*此示例显示 D4 单元格文本是否加粗。*/
function test() {
    alert(Range("D4").DisplayFormat.Font.Bold)
}
```
