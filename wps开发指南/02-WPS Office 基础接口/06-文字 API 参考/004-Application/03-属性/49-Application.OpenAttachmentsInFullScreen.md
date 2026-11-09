# Application.OpenAttachmentsInFullScreen

返回或设置 **Boolean** 值，该值表示 WPS 是否在阅读模式下打开电子邮件附件。可读写。



## 语法

express.**OpenAttachmentsInFullScreen**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果 WPS 在阅读模式下打开电子邮件附件，则通知用户。*/
function test() {
    if (Application.OpenAttachmentsInFullScreen) {
        alert("WPS 在阅读模式下打开电子邮件附件")
    }
}
```


```JavaScript
/*本示例设置 WPS 在阅读模式下打开电子邮件附件。*/
function test() {
    Application.OpenAttachmentsInFullScreen = true
}
```
