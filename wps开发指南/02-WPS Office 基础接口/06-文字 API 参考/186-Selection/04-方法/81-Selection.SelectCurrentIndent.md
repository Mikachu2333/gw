# Selection.SelectCurrentIndent

向前扩展选定内容，直至遇到具有另一种段落左右缩进量的文本为止。



## 语法

express.**SelectCurrentIndent()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例跳转到活动文档中与活动文档的第一段的段落缩进量不同的第一个段落的开始。*/
function test() {
    Selection.HomeKey(wdStory, wdMove)
    Selection.SelectCurrentIndent()
    Selection.Collapse(wdCollapseEnd)
}
```


```JavaScript
/*本示例判断活动文档中的所有段落的段落左或右缩进量是否相同，然后在一个消息框显示判断结果。*/
function test() {
    Selection.HomeKey(wdStory, wdMove)
    Selection.SelectCurrentIndent()
    Selection.Collapse(wdCollapseEnd)
    if (Selection.End == ActiveDocument.Content.End - 1) {
        alert("All paragraphs share the same left and right indents.")
    } else {
        alert("Not all paragraphs share the same left and right indents.")
    }
}
```
