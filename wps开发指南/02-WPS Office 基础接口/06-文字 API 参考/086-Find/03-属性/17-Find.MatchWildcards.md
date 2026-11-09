# Find.MatchWildcards

如果要查找的文字中包含通配符，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MatchWildcards**

express   一个代表 **Find** 对象的变量。

## 类型

boolean

## 说明


 **MatchWildcards** 属性与 **“查找和替换”** 对话框中的 **“使用通配符”** 复选框相对应。

使用 **Find** 对象的 **[Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Text)** 属性或将 _FindText_ 参数与 **[Execute](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Execute)** 方法结合使用，来指定要在文档中定位的文本。



## 示例


```JavaScript
/*此示例查找并选择下一个以“s”开头并以“t”结尾的三个字母的单词。*/
function test() {
    let find = Selection.Find
    find.ClearFormatting()
    find.Text = "s?t"
    find.MatchFuzzy = false
    find.MatchWildcards = true
    find.Execute(null, null, null, null, null, null, true, null, false)
}
```


```JavaScript
/*本示例查找所有以“un”开头且以“ed”结尾的单词，然后为其设置突出显示格式。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.ClearFormatting()
    find.MatchWildcards = true
    find.Text = "un*ed"
    while (find.Execute()) {
        find.Parent.HighlightColorIndex = wdYellow
    }
}
```
