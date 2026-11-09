# Document.ShowSpellingErrors

如果 WPS 为文档中的拼写错误添加红色波浪线，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowSpellingErrors**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


必须将 **[CheckSpellingAsYouType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/CheckSpellingAsYouType)** 属性设置为 **True** ，才能查看文档中的拼写错误。



## 示例


```JavaScript
/*本示例设置 WPS 隐藏活动文档中的拼写错误标记，该标记为红色波浪线。*/
function test() {
    ActiveDocument.ShowSpellingErrors = false
}
```


```JavaScript
/*本示例显示活动文档中的拼写错误标记。*/
function test() {
    Options.CheckSpellingAsYouType = true
    ActiveDocument.ShowSpellingErrors = true
}
```


```JavaScript
/*本示例显示 WPS 是否为活动文档中的拼写错误添加红色波浪线。*/
function test() {
    let temp = ActiveDocument.ShowSpellingErrors
    alert(temp)
}
```
