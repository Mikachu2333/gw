# Find.Found

如果生成搜索匹配，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**Found**

express   一个代表 **Find** 对象的变量。

## 类型

boolean

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
/*本示例显示是否在活动文档的主文档文章中搜索到文本“kingsoft”。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.ClearFormatting()
    find.Execute("kingsoft")
    alert(find.Found)
}
```
