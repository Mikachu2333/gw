# Font.Superscript

如果字体格式为上标，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**Superscript**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


返回 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （当返回值既可为 **msoTrue** ，也可为 **msoFalse** 时取该值）。可设置为 **msoTrue** 、 **msoFalse** 或 **wdToggle** 。

如果将 **Superscript** 属性设为 **msoTrue** ，则 **Subscript** 属性会设为 **msoFalse** ，反之亦然。



## 示例


```JavaScript
/*本示例在活动文档的开头插入文本，并将第四个单词的两个字符设为上标。*/
function test() {
    let range = ActiveDocument.Range(0, 0)
    range.InsertAfter("Superscript in the 4th wps.")
    ActiveDocument.Range(20, 22).Font.Superscript = msoTrue
}
```


```JavaScript
/*本示例将所选文本设为上标。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        Selection.Font.Superscript = msoTrue
    } else {
        MsgBox("You need to select some text.")
    }
}
```
