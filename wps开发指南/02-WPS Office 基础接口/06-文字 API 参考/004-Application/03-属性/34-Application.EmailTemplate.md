# Application.EmailTemplate

返回或设置一个 **String** 类型的值，该值代表发送电子邮件时使用的文档模板。可读写。



## 语法

express.**EmailTemplate**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 说明


如果在 Outlook 中指定 WPS 为电子邮件编辑器，可使用 **EmailTemplate** 属性。



## 示例


```JavaScript
/*本示例设置 WPS 对所有的新电子邮件使用名为“Email”的模板。本示例假定有一个名为“Email”的模板保存于默认的模板位置。*/
function test() {
    Application.EmailTemplate = "Email"
}
```


```JavaScript
/*本示例在光标处插入发送电子邮件时使用的文档模板。*/
function test() {
    Selection.TypeText(Application.EmailTemplate)
}
```
