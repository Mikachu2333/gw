# Application.Language

返回一个 **MsoLanguageID** 常量，该常量代表为 WPS 用户界面选定的语言。



## 语法

express.**Language**

express   一个代表 **Application** 对象的变量。

## 类型

MsoLanguageID

## 说明


该属性的值与下列表达式的返回值相同：

```JavaScript
Application.LanguageSettings.LanguageID(msoLanguageIDUI)
```



## 示例


```JavaScript
/*本示例判断 WPS 用户界面所选语言是否为英语（美国），并通知用户。*/
function test() {
    if (Application.Language == msoLanguageIDEnglishUS) {
        alert("The user interface language is U.S. English.")
    } else {
        alert("The user interface language is not U.S. English.")
    }
}
```


```JavaScript
/*本示例显示 WPS 用户界面所选语言是否为简体中文。*/
function test() {
    alert(Application.Language == msoLanguageIDSimplifiedChinese)
}
```
