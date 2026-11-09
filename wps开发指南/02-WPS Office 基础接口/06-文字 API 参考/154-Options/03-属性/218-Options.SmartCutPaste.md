# Options.SmartCutPaste

如果在剪切和粘贴时，WPS 自动调整字词和标点符号之间的间距，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**SmartCutPaste**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为在剪切和粘贴时自动调整字词和标点符号之间的间距，然后删除和粘贴新建文档中的部分文本。如果将 SmartCutPaste 属性设置为 false，那么第二个和第三个词将一起处理。*/
function test() {
    Options.SmartCutPaste = true
    let document = Documents.Add()
    document.Content.InsertAfter("The brown quick fox")
    document.Words.Item(2).Cut()
    document.Characters.Item(10).Paste()
}
```


```JavaScript
/*本示例显示 WPS 在剪切和粘贴时，是否自动调整字词和标点符号之间的间距。*/
function test() {
    alert(Options.SmartCutPaste)
}
```
