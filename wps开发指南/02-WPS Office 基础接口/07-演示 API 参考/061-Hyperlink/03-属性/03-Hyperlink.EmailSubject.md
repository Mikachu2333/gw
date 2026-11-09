# Hyperlink.EmailSubject

返回或设置超链接主题行的文本字符串。该主题行附加到超链接的 Internet 地址（URL）中。可读/写 **String** 类型。



## 语法

express.**EmailSubject**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

string

## 说明


此属性通常与电子邮件超链接一起使用。其值优先于在同一 **Hyperlink** 对象的 **[Address](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlink/member/Address)** 属性中指定的任意电子邮件主题。



## 示例


```JavaScript
/*本示例设置当前演示文稿第一张幻灯片上第一个超链接的电子邮件主题行。*/
function test() {
    ActivePresentation.Slides.Item(1).Hyperlinks.Item(1).EmailSubject = "Quote Request"
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片第二个超链接的电子邮件主题行。*/
function test() {
    let hyperlink = ActiveWindow.Selection.SlideRange.Item(1).Hyperlinks.Item(2)
    alert(hyperlink.EmailSubject)
}
```
