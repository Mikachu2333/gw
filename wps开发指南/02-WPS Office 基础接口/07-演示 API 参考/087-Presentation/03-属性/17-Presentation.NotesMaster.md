# Presentation.NotesMaster

返回一个代表备注母版的 **[Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/obj)** 对象。只读。



## 语法

express.**NotesMaster**

express   一个代表 **Presentation** 对象的变量。

## 类型

Master

## 示例


```JavaScript
/*本示例设置活动演示文稿的备注母版的页眉和页脚文。*/
function test() {
    let headersFooters = Application.ActivePresentation.NotesMaster.HeadersFooters
    headersFooters.Header.Text = "Employee Guidelines"
    headersFooters.Footer.Text = "kingsoft"
}
```


```JavaScript
/*本示例显示第一篇演示文稿备注母版的日期。*/
function test() {
    alert(Presentations.Item(1).NotesMaster.HeadersFooters.DateAndTime.Text)
}
```
