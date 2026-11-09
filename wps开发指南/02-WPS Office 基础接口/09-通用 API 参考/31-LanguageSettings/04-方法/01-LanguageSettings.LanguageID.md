# LanguageSettings.LanguageID

获取一个 **[MsoLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoLanguageID)** 常量，代表安装语言、用户界面语言或帮助语言的区域设置标识符（LCID）。只读。



## 语法

express.**LanguageID(Id)**

express   一个代表 **LanguageSettings** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Id | 必选 | MsoAppLanguageID | 返回一个 **MsoAppLanguageID** 枚举。 |

## 返回值

number（int 精度）

## 示例


```JavaScript
/*本示例运行于各组件，检查用户界面和执行模式的 LanguageID 属性设置，以验证它们是否设置为相同的 LCID。如果存在差异，则通知用户。*/
function test() {
    if (Application.LanguageSettings.LanguageID(msoLanguageIDExeMode) != Application.LanguageSettings.LanguageID(msoLanguageIDUI)) {
        alert("The user interface language and execution mode are different.")
    }
}
```


```JavaScript
/*本示例运行于各组件，判断如果应用程序的用户界面语言为简体中文，则通知用户。*/
function test() {
    if (Application.LanguageSettings.LanguageID(msoLanguageIDUI) == msoLanguageIDSimplifiedChinese) {
        alert("用户界面语言为简体中文")
    }
}
```
