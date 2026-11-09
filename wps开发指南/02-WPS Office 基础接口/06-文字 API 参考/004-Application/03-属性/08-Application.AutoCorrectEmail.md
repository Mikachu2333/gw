# Application.AutoCorrectEmail

返回一个 **[AutoCorrect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/obj)** 对象，该对象代表对电子邮件消息进行的自动更正。



## 语法

express.**AutoCorrectEmail**

express   一个代表 **Application** 对象的变量。

## 类型

AutoCorrect

## 示例


```JavaScript
/*本示例设置 WPS 可自动更正电子邮件信息中无意按下 Caps Lock（大写锁定）键所产生的错误。*/
function test() {
    Application.AutoCorrectEmail.CorrectCapsLock = true
}
```


```JavaScript
/*本示例显示是否自动更正电子邮件信息中首字母大写的错误。*/
function test() {
    alert(Application.AutoCorrectEmail.CorrectInitialCaps)
}
```
