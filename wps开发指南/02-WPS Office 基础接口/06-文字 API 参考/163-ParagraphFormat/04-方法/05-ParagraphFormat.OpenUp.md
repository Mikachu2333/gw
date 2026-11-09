# ParagraphFormat.OpenUp

为指定段落设置 12 磅的段前间距。



## 语法

express.**OpenUp()**

express   一个代表 **ParagraphFormat** 对象的变量。

## 返回值

void

## 说明


您还可以使用 **SpaceBefore** 属性设置段落间距。下列两个语句是等效的：

```JavaScript
Selection.ParagraphFormat.OpenUp()
Selection.ParagraphFormat.SpaceBefore = 12
```



## 示例


```JavaScript
/*本示例为所选段落设置 12 磅的段前间距。*/
function test() {
    Selection.ParagraphFormat.OpenUp()
}
```


```JavaScript
/*本示例更改活动文档的第二段的格式，为该段落设置 12 磅的段前间距。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).Format.OpenUp()
}
```
