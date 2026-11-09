# Replacement.Text

返回或设置要替换的文本。 **String** 类型，可读写。



## 语法

express.**Text**

express   一个代表 **Replacement** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例用“Goodbye”替换活动文档中的“Hello”。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.ClearFormatting()
    find.Replacement.ClearFormatting()
    find.Text = "Hello"
    find.Replacement.Text = "Goodbye"
    find.Execute(null, null, null, null, null, null, null, null, null, null, wdReplaceAll)
}
```


```JavaScript
/*本示例用“test”替换所选内容中的第一个单词“example”。*/
function test() {
    let find = Selection.Find
    find.Text = "example"
    find.Replacement.Text = "test"
    find.Execute(null, null, null, null, null, null, null, null, null, null, wdReplaceOne)
}
```
