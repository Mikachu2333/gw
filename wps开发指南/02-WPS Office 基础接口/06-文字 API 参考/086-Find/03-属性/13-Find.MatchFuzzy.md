# Find.MatchFuzzy

如果 WPS 在搜索过程中使用日文文本的非特定搜索选项，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MatchFuzzy**

express   一个代表 **Find** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例对所选区域中的“ピアノ”进行非特定搜索，并选择下一个匹配项。*/
function test() {
    let find = Selection.Find
    find.ClearFormatting()
    find.Text = "ピアノ"
    find.MatchFuzzy = true
    find.Execute(null, null, null, null, null, null, true, wdFindContinue, false)
}
```


```JavaScript
/*此示例显示活动文档的主文档文章的搜索选项中是否使用日文文本的非特定搜索选项。*/
function test() {
    alert(ActiveDocument.Content.Find.MatchFuzzy)
}
```
