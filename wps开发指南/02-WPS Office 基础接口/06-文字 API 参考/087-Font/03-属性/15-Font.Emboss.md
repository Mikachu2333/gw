# Font.Emboss

如果指定字体格式为阳文，则该属性值为 **True** 。 **Long** 类型，可读写。



## 语法

express.**Emboss**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


返回 **True** 、 **False** 或 **wdUndefined** 。该属性可设为 **True** 、 **False** 或 **wdToggle** 。如果将 **Emboss** 设置为 **True** ，则 **Engrave** 将设置为 **False** ，反之亦然。



## 示例


```JavaScript
/*本示例将新文档中第二个句子用阳文显示。*/
function test() {
    let con = Documents.Add().Content
    con.InsertAfter("This is the first sentence. ")
    con.InsertAfter("This is the second sentence. ")
    con.Sentences.Item(2).Font.Emboss = true
}
```


```JavaScript
/*本示例将选定的文本用阳文显示。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        Selection.Font.Emboss = true
    } else {
        alert("You need to select some text.")
    }
}
```
