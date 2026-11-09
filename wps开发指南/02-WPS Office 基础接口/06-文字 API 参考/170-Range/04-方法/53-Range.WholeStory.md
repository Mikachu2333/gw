# Range.WholeStory

扩展某一范围使其包含整个文章（文章：包含文档中可区别于其他文字区域的文字区域。例如，如果文档包括正文文本、脚注和标题，则文章包含主文章、脚注文章和标题文章。）。



## 语法

express.**WholeStory()**

express   一个代表 **Range** 对象的变量。

## 返回值

void

## 说明


下列指令在功能上是等价的（其中 _range_ 是有效的 **Range** 对象）：

```JavaScript
range.WholeStory()
range.Expand(wdStory)
```



## 示例


```JavaScript
/*本示例扩展 range 使其包含整个文档，然后将该范围的字体设为 Arial。*/
function test() {
    let range = Selection.Range
    range.WholeStory()
    range.Font.Name = "Arial"
}
```


```JavaScript
/*本示例扩展 range 使其包含文档的整个尾注部分，然后将该尾注部分复制到新文档中。*/
function test() {
    let endnotes = ActiveDocument.Endnotes
    if (endnotes.Count >= 1) {
        let range = endnotes.Item(1).Range
        range.WholeStory()
        range.Copy()
        Documents.Add().Content.Paste()
    }
}
```
