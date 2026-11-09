# Find.Wrap

如果从文档开头之外的位置开始搜索且到达文档末尾（或如果 **Forward** 设置为 **False** ，则反之），或者如果在指定的所选内容或区域中未找到搜索文本，则返回或设置其结果。 **WdFindWrap** 类型，可读写。



## 语法

express.**Wrap**

express   一个代表 **Find** 对象的变量。

## 类型

WdFindWrap

## 示例


```JavaScript
/*本示例在文档中向前搜索单词“aspirin”，到达文档末尾时，搜索将在文档的开头继续，如果找到单词 “aspirin”，则将其选中。*/
function test() {
    let find = Selection.Find
    find.Forward = true
    find.ClearFormatting()
    find.MatchWholeWord = true
    find.MatchCase = false
    find.Wrap = wdFindContinue
    find.Execute("aspirin")
}
```


```JavaScript
/*本示例显示所选内容的搜索选项中的 Wrap 属性值是否为wdFindAsk。*/
function test() {
    alert(Selection.Find.Wrap == wdFindAsk)
}
```
