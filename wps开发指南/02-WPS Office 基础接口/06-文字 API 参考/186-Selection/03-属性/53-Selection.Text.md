# Selection.Text

返回或设置指定的选定内容中的文本。 **String** 类型，可读写。



## 语法

express.**Text**

express   一个代表 **Selection** 对象的变量。

## 类型

string

## 说明


 **Text** 属性返回选定内容的无格式纯文本。设置该属性，可替换该区域或选定内容的文本。



## 示例


```JavaScript
/*本示例显示选定区域中的文本。如果没有选中任何内容，则显示插入点之后的字符。*/
function test() {
    alert(Selection.text)
}
```


```JavaScript
/*本示例在新文档中插入 10 行文字。*/
function test() {
    Documents.Add()
    for (let i = 1; i <= 10; i++) {
        Selection.Text = "Line" + i + "\n"
        Selection.MoveDown(wdParagraph, 1)
    }
}
```
