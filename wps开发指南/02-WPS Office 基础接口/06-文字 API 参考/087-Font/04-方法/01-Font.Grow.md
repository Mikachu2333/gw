# Font.Grow

将字号增大为下一个可用的字号。



## 语法

express.**Grow()**

express   一个代表 **Font** 对象的变量。

## 返回值

void

## 说明


如果所选内容或范围包含多种字号，则将每一个字号都增大为下一个可用的设置。



## 示例


```JavaScript
/*本示例增大新文档中第四个单词的字号。*/
function test() {
    let range = Application.Documents.Add().Content
    range.InsertAfter("This is a test of the Grow method.")
    alert("Click OK to increase the font size of the fourth text.")
    range.Words.Item(4).Font.Grow()
}
```


```JavaScript
/*本示例增大选定文本的字号。*/
function test() {
    if (Application.Selection.Type == wdSelectionNormal) {
        Application.Selection.Font.Grow()
    } else {
        alert("You need to select some text.")
    }
}
```
