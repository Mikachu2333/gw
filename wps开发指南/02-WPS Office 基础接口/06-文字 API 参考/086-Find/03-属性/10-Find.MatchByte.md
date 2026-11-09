# Find.MatchByte

如果在搜索过程中区分全角和半角的字符或字母，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MatchByte**

express   一个代表 **Find** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在指定的范围内搜索“マイクロソフト”一词且不区分全角和半角字符。*/
function test() {
    let find = Selection.Find
    find.ClearFormatting()
    find.MatchWholeWord = true
    find.MatchByte = false
    find.Execute("マイクロソフト")
}
```


```JavaScript
/*此示例显示活动文档的主文档文章的搜索选项中是否区分全角和半角的字符或字母。*/
function test() {
    alert(ActiveDocument.Content.Find.MatchByte)
}
```
