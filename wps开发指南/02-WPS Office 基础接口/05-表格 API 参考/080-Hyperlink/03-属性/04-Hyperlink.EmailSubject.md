# Hyperlink.EmailSubject

返回或设置指定超链接的电子邮件主题行的文本字符串。主题行是添加到超链接地址上的。 **String** 类型，可读写。



## 语法

express.**EmailSubject**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

string

## 说明


该属性常与电子邮件超链接一起使用。

该属性的值优先于使用同一 **Hyperlink** 对象的 **[Address](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/member/Address)** 属性指定的任何电子邮件主题行。



## 示例


```JavaScript
/*本示例设置第一张工作表中第一个超链接的电子邮件主题行*/
function test() {
    Application.Worksheets.Item(1).Hyperlinks.Item(1).EmailSubject = "Quote Request"
}
```


```JavaScript
/*本示例设置单元格G1中的第一项超链接的电子邮件主题行*/
function test() {
    let hl = Range("G1").Hyperlinks.Item(1)
    hl.EmailSubject = "活动报名"
}
```
