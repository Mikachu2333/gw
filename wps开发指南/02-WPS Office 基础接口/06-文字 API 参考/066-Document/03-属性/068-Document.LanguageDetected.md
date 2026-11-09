# Document.LanguageDetected

返回或设置一个指定 WPS 是否对指定文本的语言进行检测的值。 **Boolean** 类型，可读写。



## 语法

express.**LanguageDetected**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


检查以前任何语言检测结果的 **LanguageID** 属性。

调用 **DetectLanguage** 方法时， **LanguageDetected** 属性会设置为 **True** 。要重新评估指定文本的语言，请将 **LanguageDetected** 属性设置为 **False** 。



## 示例


```JavaScript
/*本示例检查活动文档，以确定其所用的语言类型并显示检查结果。*/
function test() {
    if (ActiveDocument.LanguageDetected) {
        let response = MsgBox("This document has already been checked. Do you want to check it again?", jsYesNo)
        if (response == jsResultYes) {
            ActiveDocument.LanguageDetected = false
            ActiveDocument.DetectLanguage()
        }
    } else {
        ActiveDocument.DetectLanguage()
    }
    if (ActiveDocument.Range.LanguageID == wdEnglishUS) {
        alert("This is a U.S. English document.")
    } else {
        alert("This is not a U.S. English document.")
    }
}
```


```JavaScript
/*本示例显示 WPS 是否对第一个文档的文本的语言进行检测。*/
function test() {
    alert(Documents.Item(1).LanguageDetected)
}
```
