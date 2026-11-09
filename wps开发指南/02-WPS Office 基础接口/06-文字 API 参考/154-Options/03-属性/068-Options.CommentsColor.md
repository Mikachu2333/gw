# Options.CommentsColor

该属性返回或设置一个 **WdColorIndex** 常量，代表文档中批注的颜色。可读写。



## 语法

express.**CommentsColor**

express   一个代表 **Options** 对象的变量。

## 类型

WdColorIndex

## 说明


此属性已更改。该 `Options.CommentsColor` 属性仍然可用，但在“重新设计的批注”体验中不会有明显效果。



## 示例


```JavaScript
/*本示例设置 WPS 的全局选项，根据批注的作者设置批注的颜色。*/
function test() {
    Options.CommentsColor = wdByAuthor
}
```


```JavaScript
/*本示例显示批注的颜色是否为红色。*/
function test() {
    alert(Options.CommentsColor == wdRed)
}
```
