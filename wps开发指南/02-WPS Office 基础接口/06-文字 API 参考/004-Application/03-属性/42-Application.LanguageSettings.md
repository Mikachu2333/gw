# Application.LanguageSettings

返回一个 **LanguageSettings** 对象，该对象包含 WPS 中语言设置的信息。



## 语法

express.**LanguageSettings**

express   一个代表 **Application** 对象的变量。

## 类型

LanguageSettings

## 示例


```JavaScript
/*本示例显示 WPS 安装的语言是否为简体中文。*/
function test() {
    alert(Application.LanguageSettings.LanguageID(msoLanguageIDInstall) == wdSimplifiedChinese)
}
```


```JavaScript
/*本示例判断如果简体中文是首选的编辑语言之一，则通知用户。*/
function test() {
    if (Application.LanguageSettings.LanguagePreferredForEditing(msoLanguageIDSimplifiedChinese)) {
        alert("简体中文是首选的编辑语言之一")
    }
}
```
