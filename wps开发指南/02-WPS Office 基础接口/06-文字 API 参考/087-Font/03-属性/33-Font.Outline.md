# Font.Outline

如果字体格式为镂空，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**Outline**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


返回 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （当返回值既可为 **msoTrue** ，也可为 **msoFalse** 时取该值）。可设置为 **msoTrue** 、 **msoFalse** 或 **wdToggle** 。



## 示例


```JavaScript
/*本示例为活动文档前三个词设置镂空字体格式。*/
function test() {
    let range = ActiveDocument.Range(ActiveDocument.Words.Item(1).Start, ActiveDocument.Words.Item(3).End)
    range.Font.Outline = msoTrue
}
```


```JavaScript
/*本示例为选定文本切换镂空格式。*/
function test() {
    Selection.Font.Outline = wdToggle
}
```


```JavaScript
/*本示例判断如果选定内容中的部分文本应用镂空格式，则清除选定内容中的镂空字体格式。*/
function test() {
    let font = Selection.Font
    if (font.Outline == wdUndefined) {
        font.Outline = msoFalse
    }
}
```
