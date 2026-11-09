# HeadersFooters.Header

返回一个 **[HeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeaderFooter/obj)** 对象，该对象代表显示于幻灯片顶部或者备注页、讲义或大纲的左上角的页眉。只读。



## 语法

express.**Header**

express   一个代表 **HeadersFooters** 对象的变量。

## 类型

HeaderFooter

## 示例


```JavaScript
/*本示例为当前演示文稿的讲义母版设置页眉文本。以大纲或讲义方式打印演示文稿时，该文本将显示于页的左上角。*/
function test() {
    let headerFooter = ActivePresentation.HandoutMaster.HeadersFooters
    headerFooter.Header.Text = "Third Quarter Report"
}
```


```JavaScript
/*本示例显示活动演示文稿的备注母版是否展示页眉。*/
function test() {
    alert(ActivePresentation.NotesMaster.HeadersFooters.Header.Visible == msoTrue)
}
```
