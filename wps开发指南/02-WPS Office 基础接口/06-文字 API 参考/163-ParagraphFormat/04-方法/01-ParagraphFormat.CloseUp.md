# ParagraphFormat.CloseUp

删除指定段落格式中段落前的任何间距。



## 语法

express.**CloseUp()**

express   一个代表 **ParagraphFormat** 对象的变量。

## 返回值

void

## 说明


以下两个语句是等价的：

```JavaScript
ActiveDocument.ParagraphFormat.CloseUp()
ActiveDocument.ParagraphFormat.SpaceBefore = 0
```



## 示例


```JavaScript
/*本示例清除活动文档所有段落的段前间距。*/
function test() {
    let paragraphFormat = ActiveDocument.Paragraphs.Format
    paragraphFormat.CloseUp()
}
```


```JavaScript
/*本示例清除选中段落的段前间距。*/
function test() {
    Selection.ParagraphFormat.CloseUp()
}
```
