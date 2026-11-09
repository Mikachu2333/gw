# Font.StrikeThrough

如果字体格式为带有删除线的文本，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**StrikeThrough**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **StrikeThrough** 属性返回 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （当返回值既可为 **msoTrue** ，也可为 **msoFalse** 时取该值）。可设置为 **msoTrue** 、 **msoFalse** 或 **wdToggle** 。

使用 **DoubleStrikeThrough** 属性可设置或返回双删除线格式。



## 示例


```JavaScript
/*本示例为活动文档中的前三个单词设置删除线格式。*/
function test() {
    let range = ActiveDocument.Range(ActiveDocument.Words.Item(1).Start, ActiveDocument.Words.Item(3).End)
    range.Font.StrikeThrough = msoTrue
}
```


```JavaScript
/*本示例为选定文本设置删除线格式。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        Selection.Font.StrikeThrough = msoTrue
    } else {
        alert("You need to select some text.")
    }
}
```
