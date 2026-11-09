# Paragraphs.OutlineDemote

对指定段落应用下一个标题级别样式（从“标题 1”到“标题 8”）。



## 语法

express.**OutlineDemote()**

express   一个代表 **Paragraphs** 对象的变量。

## 返回值

void

## 说明


如果一个段落的样式为“标题 2”，则此方法将该段落的标题样式降级到“标题 3”。



## 示例


```JavaScript
/*本示例将所选段落降级。*/
function test() {
    Selection.Paragraphs.OutlineDemote()
}
```


```JavaScript
/*本示例将活动文档中的所有段落降级。*/
function test() {
    ActiveDocument.Paragraphs.OutlineDemote()
}
```
