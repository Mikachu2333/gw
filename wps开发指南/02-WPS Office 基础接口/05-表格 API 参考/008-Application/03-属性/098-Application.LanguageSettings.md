# Application.LanguageSettings

返回一个 **[LanguageSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/LanguageSettings/obj)** 对象，该对象包含 ET 中有关语言设置的信息。只读。



## 语法

express.**LanguageSettings**

express   一个代表 **Application** 对象的变量。

## 类型

LanguageSettings

## 示例


```JavaScript
/*本示例显示安装 ET 时所选语言的语言标识符是否为msoLanguageIDSimplifiedChinese。*/
function test() {
    let languageSet = Application.LanguageSettings
    alert(languageSet.LanguageID(msoLanguageIDInstall) == msoLanguageIDSimplifiedChinese)
}
```


```JavaScript
/*本示例显示msoLanguageIDTraditionalChinese是否为编辑的首选语言。*/
function test() {
    alert(Application.LanguageSettings.LanguagePreferredForEditing(msoLanguageIDTraditionalChinese))
}
```
