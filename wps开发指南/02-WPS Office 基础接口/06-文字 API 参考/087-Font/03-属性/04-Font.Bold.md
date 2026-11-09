# Font.Bold

如果字体格式为加粗，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**Bold**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


返回 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （当返回值既可为 **msoTrue** ，也可为 **msoFalse** 时取该值）。可设置为 **msoTrue** 、 **msoFalse** 或 **wdToggle** 。



## 示例


```JavaScript
/*本示例判断如果选定内容中有一部分字体为加粗格式，则将全部选定内容的格式都设为加粗格式。*/
function test() {
    if (Application.Selection.Type == wdSelectionNormal) {
        if (Application.Selection.Font.Bold == wdUndefined) {
            Application.Selection.Font.Bold = msoTrue
        }
    } else {
        alert("You need to select some text.")
    }
}
```


```JavaScript
/*本示例取消活动文档的主文档文章的字体加粗格式。*/
function test() {
    let font = ActiveDocument.Content.Font
    font.Bold = msoFalse
}
```
