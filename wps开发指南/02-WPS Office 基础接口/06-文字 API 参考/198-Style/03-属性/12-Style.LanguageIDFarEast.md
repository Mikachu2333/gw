# Style.LanguageIDFarEast

返回或设置指定对象的东亚语言。可读写 **[WdLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLanguageID)** 类型。



## 语法

express.**LanguageIDFarEast**

express   一个代表 **Style** 对象的变量。

## 类型

WdLanguageID

## 说明


推荐使用本方法，以返回或设置在 WPS 中创建的文档中的东亚文字的语言。



## 示例


```JavaScript
/*本示例将所选内容的样式的语言设置为朝鲜语。*/
function test() {
    Selection.Style.LanguageIDFarEast = wdKorean
}
```


```JavaScript
/*此示例显示活动文档中名为“标题”的样式的东亚语言是否为简体中文。*/
function test() {
    alert(ActiveDocument.Styles.Item("标题").LanguageIDFarEast == wdSimplifiedChinese)
}
```
