# Style.LanguageID

返回或设置一个 **[WdLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLanguageID)** 常量，该常量代表指定范围的语言。可读写。



## 语法

express.**LanguageID**

express   一个代表 **Style** 对象的变量。

## 类型

WdLanguageID

## 说明


根据您所选择或安装的语言支持（例如，美国英语），某些 **WdLanguageID** 常量可能不可用。



## 示例


```JavaScript
/*此示例重新定义标题样式以使用西班牙语校对工具，然后在消息框中显示新样式的说明。*/
function test() {
    ActiveDocument.Styles.Item("标题").LanguageID = wdSpanish
    alert(ActiveDocument.Styles.Item("标题").Description)
}
```


```JavaScript
/*本示例显示所选内容的样式的语言是否为wdEnglishUS。*/
function test() {
    alert(Selection.Style.LanguageID == wdEnglishUS)
}
```
