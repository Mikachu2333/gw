# Find.Forward

如果查找操作在文档中往前搜索，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Forward**

express   一个代表 **Find** 对象的变量。

## 类型

boolean

## 说明


如果该参数值为 **False** ，则 WPS 查找操作在文档中往回搜索。



## 示例


```JavaScript
/*本示例将所选内容中下一个出现的单词“hi”替换为“hello”。*/
function test() {
    let find = Selection.Find
    find.Forward = true
    find.Text = "hi"
    find.ClearFormatting()
    find.Replacement.Text = "hello"
    find.Execute(null, null, null, null, null, null, null, null, null, null, wdReplaceOne)
}
```


```JavaScript
/*本示例在文档中往回搜索单词“Kingsoft”，如果找到了该单词，则自动将其选中。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    let find = Selection.Find
    find.Forward = false
    find.ClearFormatting()
    find.MatchWholeWord = true
    find.MatchCase = false
    find.Wrap = wdFindContinue
    find.Execute("Kingsoft")
}
```
