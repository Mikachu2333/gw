# ContentControl.DateDisplayLocale

返回一个 **WdLanguageID** ，它代表日期内容控件中显示的日期的语言格式。可读写。



## 语法

express.**DateDisplayLocale**

express   一个代表 **ContentControl** 对象的变量。

## 类型

WdLanguageID

## 说明


默认情况下， **DateDisplayLocale** 属性最初设置为 WPS 中指定的编辑语言（前提是它与 Windows 中指定的位置不同）。



## 示例


```JavaScript
/*本示例显示活动文档中第二个（日历）内容控件展示的日期的语言格式是否为wdSimplifiedChinese。*/
function test() {
    alert(ActiveDocument.ContentControls.Item(2).DateDisplayLocale == wdSimplifiedChinese)
}
```


```JavaScript
/*本示例设置所选内容中第二个（日历）内容控件显示的日期的语言格式。*/
function test() {
    let control = Selection.ContentControls.Item(2)
    control.DateDisplayLocale = wdTraditionalChinese
}
```
