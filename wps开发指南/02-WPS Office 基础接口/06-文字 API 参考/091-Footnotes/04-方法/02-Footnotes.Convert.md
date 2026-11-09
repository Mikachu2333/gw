# Footnotes.Convert

将尾注转换为脚注，或将脚注转换为尾注。



## 语法

express.**Convert()**

express   一个代表 **Footnotes** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将选定内容的脚注转换为尾注。*/
function test() {
    if (Selection.Footnotes.Count > 0) {
        Selection.Footnotes.Convert()
    }
}
```


```JavaScript
/*本示例将活动文档上所有脚注转换为尾注。*/
function test() {
    ActiveDocument.Footnotes.Convert()
}
```
