# Paragraph.OutlineDemoteToBody

通过应用“正文”样式将指定段落降级为正文文本。



## 语法

express.**OutlineDemoteToBody()**

express   一个代表 **Paragraph** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将所选内容中的第一段降级为正文文本。*/
function test() {
    Selection.Paragraphs.Item(1).OutlineDemoteToBody()
}
```


```JavaScript
/*本示例将活动窗口切换至大纲视图，并将所选内容中的第一段降级为正文文本。*/
function test() {
    ActiveDocument.ActiveWindow.View.Type = wdOutlineView
    Selection.Paragraphs.Item(1).OutlineDemoteToBody()
}
```
