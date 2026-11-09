# Paragraph.SelectNumber

选择列表中的编号或项目符号。



## 语法

express.**SelectNumber()**

express   一个代表 **Paragraph** 对象的变量。

## 返回值

void

## 说明


如果在不包括列表的段落、选定内容或区域中调用 **SelectNumber** 方法，则显示一条错误消息。



## 示例


```JavaScript
/*本示例选定列表中的项目符号或编号（该列表包括活动文档中的选定段落），并将项目符号或编号的字号增加至 17 磅。本示例假定选定内容中的第一段被设为项目符号或编号列表。*/
function test() {
    Selection.Paragraphs.Item(1).SelectNumber()
    Selection.Font.Size = 17
}
```


```JavaScript
/*本示例选中活动文档第二段列表中的项目符号或编号。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).SelectNumber()
}
```
