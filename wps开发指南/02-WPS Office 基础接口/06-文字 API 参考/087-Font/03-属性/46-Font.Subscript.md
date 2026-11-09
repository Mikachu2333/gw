# Font.Subscript

如果字体格式为下标，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**Subscript**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


返回 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （当返回值既可为 **msoTrue** ，也可为 **msoFalse** 时取该值）。可设置为 **msoTrue** 、 **msoFalse** 或 **wdToggle** 。

如果将 **Subscript** 属性设为 **msoTrue** ，则 **Superscript** 属性会设为 **msoFalse** ，反之亦然。



## 示例


```JavaScript
/*本示例在活动文档的开头插入文本，并将第十个字符设为下标。*/
function test() {
    let range = ActiveDocument.Range(0, 0)
    range.InsertAfter("Water = H20")
    range.Characters.Item(10).Font.Subscript = msoTrue
}
```


```JavaScript
/*本示例检查所选文本的下标格式。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        let subscript = Selection.Font.Subscript
        if (subscript == wdUndefined || subscript == msoTrue) {
            alert("Subscript text exists in the selection.")
        } else {
            alert("No subscript text in the selection.")
        }
    } else {
        alert("You need to select some text.")
    }
}
```
