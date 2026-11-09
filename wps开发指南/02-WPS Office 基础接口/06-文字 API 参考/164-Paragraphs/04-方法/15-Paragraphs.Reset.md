# Paragraphs.Reset

删除手动段落格式（不使用样式应用的格式）。



## 语法

express.**Reset()**

express   一个代表 **Paragraphs** 对象的变量。

## 返回值

void

## 说明


如果手动将段落设置为右对齐，而基本样式为其他对齐方式，则用 **Reset** 方法将手动对齐方式改为与基本样式相同。



## 示例


```JavaScript
/*本示例删除活动文档手动设定的段落格式。*/
function test() {
    ActiveDocument.Paragraphs.Reset()
}
```


```JavaScript
/*本示例删除所选内容手动设定的段落格式。*/
function test() {
    Selection.Paragraphs.Reset()
}
```
