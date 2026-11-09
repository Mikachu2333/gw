# Find.MatchWholeWord

如果查找操作只查找完整单词，而不是一个长单词的一部分，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MatchWholeWord**

express   一个代表 **Find** 对象的变量。

## 类型

boolean

## 说明


使用 **Find** 对象的 **[Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Text)** 属性或将 _FindText_ 参数与 **[Execute](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Execute)** 方法结合使用，来指定要在文档中定位的文本。



## 示例


```JavaScript
/*本示例在将活动文档中的“Inc”替换为“incorporated”之前，清除查找和替换准则中的所有格式限制。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.ClearFormatting()
    find.Replacement.ClearFormatting()
    find.MatchWholeWord = true
    find.Execute("Inc", null, null, null, null, null, null, null, null, "incorporated", wdReplaceAll)
}
```


```JavaScript
/*此示例显示所选内容的搜索选项中是否只查找完整单词。*/
function test() {
    alert(Selection.Find.MatchWholeWord)
}
```
