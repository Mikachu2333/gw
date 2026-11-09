# Font.ColorIndex

返回或设置一个 **WdColorIndex** 常量，该常量代表指定字体的颜色。可读写。



## 语法

express.**ColorIndex**

express   一个代表 **Font** 对象的变量。

## 类型

WdColorIndex

## 说明


 **wdByAuthor** 常量不是有效的字体颜色。



## 示例


```JavaScript
/*本示例更改活动文档首段的文字颜色。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.Font.ColorIndex = wdGreen
}
```


```JavaScript
/*本示例将所选文本的字体颜色设置为红色。*/
function test() {
    Application.Selection.Font.ColorIndex = wdRed
}
```
