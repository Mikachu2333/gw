# Options.CheckSpellingAsYouType

如果 WPS 在您键入的同时自动进行拼写检查并标记错误，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CheckSpellingAsYouType**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


本属性将标记拼写错误。如要在屏幕上查看标记，则必须将 **[ShowSpellingErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ShowSpellingErrors)** 属性设置为 **True** 。



## 示例


```JavaScript
/*本示例关闭 WPS 中的自动拼写检查功能。*/
function test() {
    Options.CheckSpellingAsYouType = false
}
```


```JavaScript
/*本示例设置 WPS 在键入的同时检查拼写错误，并在活动文档中显示所找到的错误。*/
function test() {
    Options.CheckSpellingAsYouType = true
    ActiveDocument.ShowSpellingErrors = true
}
```


```JavaScript
/*本示例显示“选项”对话框中“拼写检查”选项卡上“输入时拼写检查”选项的状态。*/
function test() {
    alert(Options.CheckSpellingAsYouType)
}
```
