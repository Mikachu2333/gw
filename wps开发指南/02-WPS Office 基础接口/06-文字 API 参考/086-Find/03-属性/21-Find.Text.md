# Find.Text

返回或设置要查找的文本。 **String** 类型，可读写。



## 语法

express.**Text**

express   一个代表 **Find** 对象的变量。

## 类型

string

## 说明


 **Text** 属性返回选定内容或区域的无格式纯文本。设置该属性，可替换该区域或选定内容的文本。



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
/*本示例显示所选内容中的搜索选项中要查找的文本。*/
function test() {
    alert(Selection.Find.Text)
}
```
