# Application.LanguageSettings

返回一个 **LanguageSettings** 对象，该对象包含 WPP 中有关语言设置的信息。只读。



## 语法

express.**LanguageSettings**

express   一个代表 **Application** 对象的变量。

## 类型

LanguageSettings

## 示例


```JavaScript
/*本示例显示应用程序安装语言的区域设置标识符（LCID）。*/
function test() {
    alert(Application.LanguageSettings.LanguageID(msoLanguageIDInstall))
}
```


```JavaScript
/*本示例显示应用程序首选语言是否为简体中文。*/
function test() {
    alert(Application.LanguageSettings.LanguagePreferredForEditing(msoLanguageIDSimplifiedChinese))
}
```
