# Find.ClearFormatting

取消在查找或替换操作中所指定文本的文本格式和段落格式。



## 语法

express.**ClearFormatting()**

express   一个代表 **Find** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*此示例在搜索所选内容之前从查找条件中删除格式，如果找到格式为粗体的单词“Hello”，则会选择整个段落并将其复制到剪贴板。*/
function test() {
    let find = Selection.Find
    find.ClearFormatting()
    find.Font.Bold = true
    find.Execute("Hello", null, null, null, null, null, true, null, true)
    if (find.Found) {
        find.Parent.Expand(wdParagraph)
        find.Parent.Copy()
    }
}
```


```JavaScript
/*本示例清除活动文档上主文档文章的搜索选项中的文本格式和段落格式。*/
function test() {
    ActiveDocument.Content.Find.ClearFormatting()
}
```
