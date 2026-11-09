# Paragraphs.OutlinePromote

对指定段落应用上一个标题级别样式（从“标题 1”到“标题 8”）。



## 语法

express.**OutlinePromote()**

express   一个代表 **Paragraphs** 对象的变量。

## 返回值

void

## 说明


如果一个段落的样式为“标题 2”，则此方法将该段落的样式升级到“标题 1”。



## 示例


```JavaScript
/*本示例将选定段落升级。*/
function test() {
    Selection.Paragraphs.OutlinePromote()
}
```


```JavaScript
/*本示例将活动窗口切换至大纲视图，并将活动文档中所有段落升级。*/
function test() {
    ActiveDocument.ActiveWindow.View.Type = wdOutlineView
    ActiveDocument.Paragraphs.OutlinePromote()
}
```
