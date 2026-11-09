# TabStop.Clear

删除指定的自定义制表位。



## 语法

express.**Clear()**

express   一个代表 **TabStop** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将删除活动文档第一段的第一个自定义制表符。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).TabStops.Item(1).Clear()
}
```


```JavaScript
/*本示例删除所选段落中第一个自定义制表位。*/
function test() {
    Application.Selection.Paragraphs.TabStops.Item(1).Clear()
}
```
