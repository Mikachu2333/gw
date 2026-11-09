# Replacement.Frame

返回一个 **[Frame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/obj)** 对象，该对象代表格式设置为指定样式的或查找并替换操作所涉及的图文框。只读。



## 语法

express.**Frame**

express   一个代表 **Replacement** 对象的变量。

## 类型

Frame

## 示例


```JavaScript
/*本示例显示活动文档上主文档的替换条件中是否使文字环绕框架。*/
function test() {
    let frame = ActiveDocument.Content.Find.Replacement.Frame
    alert(frame.TextWrap)
}
```


```JavaScript
/*本示例将活动文档上主文档的图文框的宽度替换为10磅。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.Replacement.ClearFormatting()
    find.Replacement.Frame.Width = 10
    find.Execute("", null, null, null, null, null, true, null, null, "", wdReplaceAll)
}
```
