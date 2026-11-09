# LanguageSettings 对象

返回 Office 应用程序中有关语言设置的信息。

## 说明


使用 Application.LanguageSettings.LanguageID(_MsoAppLanguageID_)，其中 [MsoAppLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoAppLanguageID) 是一个用于返回指定应用程序的区域设置标识符（LCID）信息的常量。


## 示例


```JavaScript
/*本示例运行于各组件，显示应用程序安装的语言是否为简体中文。*/
function test() {
    alert(Application.LanguageSettings.LanguageID(msoLanguageIDInstall) == msoLanguageIDSimplifiedChinese)
}
```


```JavaScript
/*本示例运行于各组件，判断如果美式英语是一种首选的编辑语言，则通知用户。*/
function test() {
    if (Application.LanguageSettings.LanguagePreferredForEditing(msoLanguageIDEnglishUS)) {
        alert("One of the preferred editing languages is US English.")
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [LanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/LanguageSettings/member/LanguageID) | 获取一个 **[MsoLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoLanguageID)** 常量，代表安装语言、用户界面语言或帮助语言的区域设置标识符（LCID）。只读。 |
| [LanguagePreferredForEditing](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/LanguageSettings/member/LanguagePreferredForEditing) | 如果 **[MsoLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoLanguageID)** 常量的值已在 Windows 注册表中被标识为首选编辑语言，则获取 **True** 。只读。 |