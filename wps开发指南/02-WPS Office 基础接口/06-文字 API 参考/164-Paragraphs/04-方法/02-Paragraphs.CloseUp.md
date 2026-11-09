# Paragraphs.CloseUp

清除指定段落前的段落间距。



## 语法

express.**CloseUp()**

express   一个代表 **Paragraphs** 对象的变量。

## 返回值

void

## 说明


以下两个语句是等价的：

```JavaScript
ActiveDocument.Paragraphs.CloseUp()
ActiveDocument.Paragraphs.SpaceBefore = 0
```



## 示例


```JavaScript
/*本示例清除选中段落的段前间距。*/
function test() {
    Selection.Paragraphs.CloseUp()
}
```


```JavaScript
/*本示例清除活动文档所有段落的段前间距。*/
function test() {
    ActiveDocument.Paragraphs.CloseUp()
}
```
