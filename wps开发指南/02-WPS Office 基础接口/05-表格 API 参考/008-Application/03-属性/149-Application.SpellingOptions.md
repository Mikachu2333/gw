# Application.SpellingOptions

返回一个 **[SpellingOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SpellingOptions/obj)** 对象，该对象表示应用程序的拼写检查选项。



## 语法

express.**SpellingOptions**

express   一个代表 **Application** 对象的变量。

## 类型

SpellingOptions

## 示例


```JavaScript
/*本示例中，ET 检查忽略混合数字的拼写检查选项的设置，并将其状态通知给用户。*/
function test() {
    // Determine the setting on spell checking for mixed digits.
    if (Application.SpellingOptions.IgnoreMixedDigits) {
        alert("The spelling options are set to ignore mixed digits.")
    } else {
        alert("The spelling options are set to check for mixed digits.")
    }
}
```


```JavaScript
/*本示例设置 ET 在使用拼写检查时检查大写单词。*/
function test() {
    Application.SpellingOptions.IgnoreCaps = false
}
```
