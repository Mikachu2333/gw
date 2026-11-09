# Options.DefaultHighlightColorIndex

返回或设置突出显示文本所用的颜色，用 **“开始”** 工具栏的 **“突出显示”** 按钮可将文本格式设为突出显示。 **WdColorIndex** 类型，可读写。



## 语法

express.**DefaultHighlightColorIndex**

express   一个代表 **Options** 对象的变量。

## 类型

WdColorIndex

## 示例


```JavaScript
/*本示例将默认的突出显示文本的颜色设置为浅绿色。新的颜色不应用于以前突出显示的任何文字。*/
function test() {
    Options.DefaultHighlightColorIndex = wdBrightGreen
}
```


```JavaScript
/*本示例显示当前突出显示文本所用的颜色是否为黄色。*/
function test() {
    alert(Options.DefaultHighlightColorIndex == wdYellow)
}
```
