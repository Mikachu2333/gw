# Font.Hidden

如果字体格式为隐藏文字，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**Hidden**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性返回 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （当返回值既可为 **msoTrue** ，也可为 **msoFalse** 时取该值）。可设置为 **msoTrue** 、 **msoFalse** 或 **wdToggle** 。

若要控制隐藏文字的显示，请使用 **View** 对象的 **ShowHiddenText** 属性。

当不显示隐藏文字时，用 **TextRetrievalMode** 对象的 **IncludeHiddenText** 属性可控制返回 **Range** 对象的属性或方法是否包含隐藏文字。



## 示例


```JavaScript
/*本示例检查选定内容中的隐藏文字。*/
function test() {
    if (Application.Selection.Type == wdSelectionNormal) {
        if (Application.Selection.Font.Hidden == wdUndefined || Application.Selection.Font.Hidden == msoTrue) {
            alert("There is hidden text in the selection.")
        } else {
            alert("No hidden text in the selection.")
        }
    } else {
        alert("You need to select some text.")
    }
}
```


```JavaScript
/*本示例将活动窗口中的所有隐藏文字设置为可见并将选定内容的格式设置为隐藏文字。*/
function test() {
    ActiveDocument.ActiveWindow.View.ShowHiddenText = true
    if (Selection.Type == wdSelectionNormal) {
        Selection.Font.Hidden = msoTrue
    }
}
```
