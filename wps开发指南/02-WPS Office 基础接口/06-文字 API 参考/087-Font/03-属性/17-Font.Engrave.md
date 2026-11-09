# Font.Engrave

如果字体格式为阴文，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**Engrave**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


返回 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （当返回值既可为 **msoTrue** ，也可为 **msoFalse** 时取该值）。可设置为 **msoTrue** 、 **msoFalse** 或 **wdToggle** 。如果将 **Engrave** 设置为 **msoTrue** ，则 **Emboss** 将设置为 **msoFalse** ，反之亦然。



## 示例


```JavaScript
/*本示例将活动文档中的第一个字母的格式设置为阴文。*/
function test() {
    let range = ActiveDocument.Characters.Item(1)
    range.Font.Size = 20
    range.Font.Engrave = msoTrue
}
```


```JavaScript
/*本示例将选定内容的格式设置为阴文。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        Selection.Font.Engrave = msoTrue
    } else {
        alert("You need to select some text.")
    }
}
```
