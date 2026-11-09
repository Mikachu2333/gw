# Font.EmphasisMark

返回或设置 **WdEmphasisMark** 常量，该常量代表字符或指定字符串的着重号。可读写。



## 语法

express.**EmphasisMark**

express   一个代表 **Font** 对象的变量。

## 类型

WdEmphasisMark

## 示例


```JavaScript
/*本示例在活动文档的第四个单词上面设置着重号（逗号）。*/
function test() {
    ActiveDocument.Words.Item(4).Font.EmphasisMark = wdEmphasisMarkOverComma
}
```


```JavaScript
/*本示例显示活动文档的主文档文章的字体的着重号是否为wdEmphasisMarkOverSolidCircle。*/
function test() {
    let font = ActiveDocument.Content.Font
    alert(font.EmphasisMark == wdEmphasisMarkOverSolidCircle)
}
```
