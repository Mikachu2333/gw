# Font.ColorIndexBi

返回或设置从右向左语言文档中指定 **Font** 对象的颜色。 **WdColorIndex** 类型，可读写。



## 语法

express.**ColorIndexBi**

express   一个代表 **Font** 对象的变量。

## 类型

WdColorIndex

## 说明


 **wdByAuthor** 常量对 **Font** 对象是无效的。



## 示例


```JavaScript
/*本示例将从右向左语言的文档中所选内容的字体的颜色设置为蓝绿色。*/
function test() {
    Selection.Font.ColorIndexBi = wdTeal
}
```


```JavaScript
/*本示例将从右向左语言的文档中主文档文章的字体颜色设置为红色。*/
function test() {
    let font = ActiveDocument.Content.Font
    font.ColorIndexBi = wdRed
}
```
