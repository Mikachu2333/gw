# Selection.ItalicRun

在当前局部中添加或删除斜体字符格式。



## 语法

express.**ItalicRun()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


如果该局部既包含斜体文本，又有非斜体文本，则该方法将在整个局部中增添斜体字符格式。



## 示例


```JavaScript
/*本示例为当前选定内容切换斜体格式。*/
function test() {
    Selection.ItalicRun()
}
```


```JavaScript
/*本示例为活动文档第一个段落添加斜体字符格式。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.Select()
    Selection.ItalicRun()
}
```
