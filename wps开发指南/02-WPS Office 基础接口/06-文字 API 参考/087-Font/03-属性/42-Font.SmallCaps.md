# Font.SmallCaps

如果字体格式为小型大写字母，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**SmallCaps**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


返回 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （当返回值既可为 **msoTrue** ，也可为 **msoFalse** 时取该值）。可设置为 **msoTrue** 、 **msoFalse** 或 **wdToggle** 。

如果将 **SmallCaps** 属性设为 **msoTrue** ，则 **AllCaps** 属性会设为 **msoFalse** ，反之亦然。



## 示例


```JavaScript
/*本示例区分新文档中小型大写字母和全部大写字母之间的差别。*/
function test() {
    let range = Documents.Add().Content
    range.InsertAfter('This is a demonstration of SmallCaps.')
    range.Words.Item(6).Font.SmallCaps = msoTrue
    range.InsertParagraphAfter()
    range.InsertAfter('This is a demonstration of AllCaps.')
    range.Words.Item(14).Font.AllCaps = msoTrue
}
```


```JavaScript
/*本示例判断如果部分选定内容中的字体格式已设置为小型大写字母格式，则将整个选定内容的字体格式设置为小型大写字母格式。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        let smallCaps = Selection.Font.SmallCaps
        if (smallCaps == wdUndefined) {
            Selection.Font.SmallCaps = msoTrue
        }
    } else {
        alert('You need to select some text.')
    }
}
```
