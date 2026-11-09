# Find.MatchSuffix

如果该属性值为 **True** ，则匹配以搜索字符串结尾的单词。可读写。



## 语法

express.**MatchSuffix**

express   一个代表 **Find** 对象的变量。

## 类型

boolean

## 说明


此属性相当于 **“查找和替换”** 对话框中的 **“区分后缀”** 复选框。



## 示例


```JavaScript
/*本示例查找活动文档的主文档文档中以“ing”结尾的所有单词，然后为其设置突出显示格式。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.ClearFormatting()
    find.Text = "ing"
    find.MatchSuffix = true
    while (find.Execute()) {
        find.Parent.HighlightColorIndex = wdYellow
    }
}
```


```JavaScript
/*此示例显示所选内容的搜索选项中是否搜索指定字符串结尾的单词。*/
function test() {
    alert(Selection.Find.MatchSuffix)
}
```
