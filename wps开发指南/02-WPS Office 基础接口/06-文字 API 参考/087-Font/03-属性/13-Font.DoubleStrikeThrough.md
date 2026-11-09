# Font.DoubleStrikeThrough

如果将指定字体的格式设置为双删除线文本，则该属性值为 **msoTrue** 。



## 语法

express.**DoubleStrikeThrough**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


返回 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （既可为 **msoTrue** ，也可为 **msoFalse** ）。可设置为 **msoTrue** 、 **msoFalse** 或 **wdToggle** 。 **Long** 类型，可读写。要设置或返回单删除线格式，可使用 **StrikeThrough** 属性。如果将 **DoubleStrikeThrough** 设置为 **msoTrue** ，则 **StrikeThrough** 将设置为 **msoFalse** ，反之亦然。



## 示例


```JavaScript
/*本示例对所选文字应用双删除线格式。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        Selection.Font.DoubleStrikeThrough = msoTrue
    } else {
        alert("You need to select some text.")
    }
}
```


```JavaScript
/*本示例取消活动文档中第一个单词的双删除线格式，并将该单词的第一个字母大写。*/
function test() {
    let range = ActiveDocument.Words.Item(1)
    range.Font.DoubleStrikeThrough = msoFalse
    range.Case = wdTitleSentence
}
```
