# Font.Animation

返回或设置应用于字体的动态效果类型。 **WdAnimation** 类型，可读写。




## 语法

express.**Animation**

express   一个代表 **Font** 对象的变量。

## 类型

WdAnimation

## 示例


```JavaScript
/*本示例为新文档中的文本设置动态效果。*/
function test()
{
let docNew = Documents.Add()
docNew.Content.InsertAfter("This is a test of animation.")
docNew.Content.Font.Animation = wdAnimationLasVegasLights
}
```


```JavaScript
/*本示例为选定文本设置动态效果。*/
function test()
{
if(Selection.Type == wdSelectionNormal) {
    Selection.Font.Animation = wdAnimationShimmer
}
else{
    MsgBox("You need to select some text.")
}
}
```
