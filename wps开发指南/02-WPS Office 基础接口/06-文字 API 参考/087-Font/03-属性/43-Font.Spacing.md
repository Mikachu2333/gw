# Font.Spacing

返回或设置字符的间距（以磅为单位）。可读写 **Single** 类型。



## 语法

express.**Spacing**

express   一个代表 **Font** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例演示活动文档开头的两种不同字符间距。*/
function test() {
    let range = ActiveDocument.Range(0, 0)
    range.InsertAfter('Demonstration of no character spacing.')
    range.InsertParagraphAfter()
    range.InsertAfter('Demonstration of character spacing (1.5pt).')
    range.InsertParagraphAfter()
    ActiveDocument.Paragraphs.Item(2).Range.Font.Spacing = 1.5
}
```


```JavaScript
/*本示例将所选文本的字符间距设置为 2 磅。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        Selection.Font.Spacing = 2
    } else {
        alert('You need to select some text.')
    }
}
```
