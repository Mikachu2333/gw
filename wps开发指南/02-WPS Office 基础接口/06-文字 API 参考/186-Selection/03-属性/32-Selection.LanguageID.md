# Selection.LanguageID

返回或设置指定对象的语言。可读写。



## 语法

express.**LanguageID**

express   一个代表 **Selection** 对象的变量。

## 类型

WdLanguageID

## 说明


对于自定义词典，在指定 **LanguageID** 属性之前，必须将 **LanguageSpecific** 属性设置为 **True** 。特定于语言的自定义词典只能检查用该语言格式编写的文本。  

根据您选择或安装的语言支持（如，美国英语）的不同，以上列出的某些常量可能不可用。



## 示例


```JavaScript
/*本示例设置选定内容的语言为简体中文。*/
function test() {
    Application.Selection.LanguageID = wdSimplifiedChinese
}
```


```JavaScript
/*本示例显示活动窗口中选定内容的语言是否为阿拉伯语。*/
function test() {
    alert(ActiveWindow.Selection.LanguageID == wdArabic)
}
```
