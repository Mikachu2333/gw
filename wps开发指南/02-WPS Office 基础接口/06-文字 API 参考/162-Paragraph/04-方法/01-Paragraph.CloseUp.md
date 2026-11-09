# Paragraph.CloseUp

清除指定段落前的任何间距。



## 语法

express.**CloseUp()**

express   一个代表 **Paragraph** 对象的变量。

## 返回值

void

## 说明


以下两个语句是等价的：

```JavaScript
ActiveDocument.Paragraphs.Item(1).CloseUp()
ActiveDocument.Paragraphs.Item(1).SpaceBefore = 0
```



## 示例


```JavaScript
/*本示例将活动文档第一段的段前间距清除。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).CloseUp()
}
```


```JavaScript
/*本示例清除选定内容中首段的段前间距。*/
function test() {
    Selection.Paragraphs.Item(1).CloseUp()
}
```
