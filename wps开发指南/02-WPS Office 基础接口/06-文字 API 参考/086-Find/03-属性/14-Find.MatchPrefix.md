# Find.MatchPrefix

如果该属性值为 **True** ，则匹配以搜索字符串开头的单词。可读写。



## 语法

express.**MatchPrefix**

express   一个代表 **Find** 对象的变量。

## 类型

boolean

## 说明


此属性相当于 **“查找和替换”** 对话框中的 **“区分前缀”** 复选框。



## 示例


```JavaScript
/*本示例查找所有以“pro”开头的单词，并将“pro”替换为“example-”。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.MatchPrefix = true
    find.Execute("pro", null, null, null, null, null, null, null, null, "example-", wdReplaceAll)
}
```


```JavaScript
/*此示例显示所选内容的搜索选项中是否搜索指定字符串开头的单词。*/
function test() {
    alert(Selection.Find.MatchPrefix)
}
```
