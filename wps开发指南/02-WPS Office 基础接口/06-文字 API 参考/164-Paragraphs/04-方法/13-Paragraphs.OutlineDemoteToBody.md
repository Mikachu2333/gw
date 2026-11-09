# Paragraphs.OutlineDemoteToBody

通过应用“正文”样式将指定段落降级为正文文本。



## 语法

express.**OutlineDemoteToBody()**

express   一个代表 **Paragraphs** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例通过应用“正文”样式将选定段落降级为正文文本。*/
function test() {
    Selection.Paragraphs.OutlineDemoteToBody()
}
```


```JavaScript
/*本示例将活动窗口切换至大纲视图，并将所有选定段落降级为正文文本。*/
function test() {
    ActiveDocument.ActiveWindow.View.Type = wdOutlineView
    Selection.Paragraphs.OutlineDemoteToBody()
}
```
