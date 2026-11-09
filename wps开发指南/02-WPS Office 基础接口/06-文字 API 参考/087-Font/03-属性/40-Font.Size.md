# Font.Size

返回或设置字号（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**Size**

express   一个代表 **Font** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例插入文本并将该文本的第七个单词的字号设置为 20 磅。*/
function test() {
    Application.Selection.Collapse(wdCollapseEnd)
    let range = Application.Selection.Range
    range.Font.Reset()
    range.InsertBefore("This is a demonstration of font size.")
    range.Words.Item(7).Font.Size = 20
}
```


```JavaScript
/*本示例确定所选文本的字号。*/
function test() {
    let size = Application.Selection.Font.Size
    if (size == wdUndefined) {
        alert("there is a mix of font sizes in the selection.")
    } else {
        alert(size + " points")
    }
}
```
