# LanguageSettings.LanguagePreferredForEditing

如果 **[MsoLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoLanguageID)** 常量的值已在 Windows 注册表中被标识为首选编辑语言，则获取 **True** 。只读。



## 语法

express.**LanguagePreferredForEditing(lid)**

express   一个代表 **LanguageSettings** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| lid | 必选 | MsoLanguageID | 返回一个 **MsoLanguageID** 枚举。 |

## 返回值

boolean

## 说明


必须测试所有有效的 **MsoLanguageID** 值，才能枚举出首选语言集。



## 示例


```JavaScript
/*本示例运行于各组件，判断如果美式英语是一种首选的编辑语言，则通知用户。*/
function test() {
    if (Application.LanguageSettings.LanguagePreferredForEditing(msoLanguageIDEnglishUS)) {
        alert("One of the preferred editing languages is US English.")
    }
}
```


```JavaScript
/*本示例运行于各组件，显示简体中文是否为一种首选的编辑语言。*/
function test() {
    alert(Application.LanguageSettings.LanguagePreferredForEditing(msoLanguageIDSimplifiedChinese))
}
```
