# Replacement.ClearFormatting

清除在替换操作中指定的文本的文本格式和段落格式。



## 语法

express.**ClearFormatting()**

express   一个代表 **Replacement** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例先清除查找或替换条件中的格式，然后将整个活动文档中的单词“Inc.”替换为“incorporated”。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.ClearFormatting()
    find.Replacement.ClearFormatting()
    find.MatchWholeWord = true
    find.Execute("Inc.", null, null, null, null, null, null, null, null, "incorporated", wdReplaceAll)
}
```


```JavaScript
/*本示例清除所选内容的替换条件中的文本格式和段落格式。*/
function test() {
    Selection.Find.Replacement.ClearFormatting()
}
```
