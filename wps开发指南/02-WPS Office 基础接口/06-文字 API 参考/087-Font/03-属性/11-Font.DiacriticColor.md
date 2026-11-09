# Font.DiacriticColor

返回或设置用于指定 **Font** 对象的音调符号的 24 位颜色。



## 语法

express.**DiacriticColor**

express   一个代表 **Font** 对象的变量。

## 类型

WdColor

## 说明


此属性可以是任何有效的 **WdColor** 常量或 JavaScript 的 **RGB** 函数所返回的值。必须将 **UseDiffDiacColor** 属性的值设为 **True** 才能使用此属性。



## 示例


```JavaScript
/*本示例将当前选定内容中的音调符号设为蓝色。*/
function test() {
    if (Application.Options.UseDiffDiacColor) {
        Selection.Font.DiacriticColor = wdColorBlue
    }
}
```


```JavaScript
/*本示例显示活动文档的主文档文章的字体的音调符号的颜色是否为红色。*/
function test() {
    let font = ActiveDocument.Content.Font
    alert(font.DiacriticColor == RGB(255, 0, 0))
}
```
