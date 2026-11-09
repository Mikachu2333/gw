# Font.Duplicate

返回表示指定字体的字符格式的 **Font** 对象的副本。



## 语法

express.**Duplicate**

express   一个代表 **Font** 对象的变量。

## 类型

Font

## 说明


可以使用 **Duplicate** 属性获取重复的 **Font** 对象所有属性的设置。可将 **Duplicate** 属性返回的对象赋给另一个 **Font** 对象，从而一次应用该对象的所有设置。在将重复对象赋给另一个对象之前，可更改重复对象的任何属性，而不会影响源对象。



## 示例


```JavaScript
/*本示例将 font 变量设为选定内容的字符格式，从 font 中删除加粗格式，并添加倾斜格式，然后创建一个新文档，插入文本，再将 font 中保存的格式应用于该文本。*/
function test() {
    let font = Selection.Font.Duplicate
    font.Bold = false
    font.Italic = true
    Documents.Add()
    Selection.InsertAfter("This is some text.")
    Selection.Font = font
}
```


```JavaScript
/*本示例复制所选内容的所有字体格式，并将该格式应用于活动文档的主文档文章。*/
function test() {
    let font = Selection.Font.Duplicate
    ActiveDocument.Content.Font = font
}
```
