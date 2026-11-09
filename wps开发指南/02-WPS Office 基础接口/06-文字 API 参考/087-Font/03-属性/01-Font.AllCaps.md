# Font.AllCaps

如果字体格式为全部字母大写，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**AllCaps**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


返回 **msoTrue** 、 **msoFalse** 或 wdUndefined（当返回值既可为 **msoTrue** ，也可为 **msoFalse** 时取该值）。该属性可设置为 **msoTrue** 、 **msoFalse** 或 **wdToggle** （与当前设置相反）。

如果设置 **AllCaps** 为 **msoTrue** ，则 **SmallCaps** 属性的值为 **msoFalse** ，反之亦然。



## 示例


```JavaScript
/*本示例判断活动文档第三段的文本格式是否为全部字母大写，并通知用户。*/
function test() {
    if (ActiveDocument.Paragraphs.Item(3).Range.Font.AllCaps == msoTrue) {
        alert("Text is all caps.")
    } else {
        alert("Text is not all caps.")
    }
}
```


```JavaScript
/*本示例将选定文本的字体格式设置为全部字母大写。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        Selection.Font.AllCaps = msoTrue
    } else {
        alert("You need to select some text.")
    }
}
```
