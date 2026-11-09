# PageSetup.TogglePortrait

在文档或节的纵向和横向页面方向之间切换。



## 语法

express.**TogglePortrait()**

express   一个代表 **PageSetup** 对象的变量。

## 返回值

void

## 说明


如果指定的节有不同的页面方向，将出现错误。



## 示例


```JavaScript
/*本示例改变活动文档的页面方向。*/
function test() {
    ActiveDocument.PageSetup.TogglePortrait()
}
```


```JavaScript
/*本示例将改变文档选定部分的所有节的页面方向。如果每节原来的方向与其他节不同，将会导致出错。*/
function test() {
    Selection.PageSetup.TogglePortrait()
}
```
