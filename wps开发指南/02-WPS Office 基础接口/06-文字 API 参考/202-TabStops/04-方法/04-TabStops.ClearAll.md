# TabStops.ClearAll

清除指定段落中的所有自定义制表位。



## 语法

express.**ClearAll()**

express   一个代表 **TabStops** 对象的变量。

## 返回值

void

## 说明


若要清除单个的制表位，请使用 **TabStop** 对象的 **Clear** 方法。 **ClearAll** 方法不会清除默认的制表位。若要操纵默认的制表位，请使用文档的 **DefaultTabStop** 属性。



## 示例


```JavaScript
/*本示例清除活动文档中的所有自定义制表位。*/
function test() {
    ActiveDocument.Paragraphs.TabStops.ClearAll()
}
```


```JavaScript
/*本示例清除活动文档中第一段的自定义制表位。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).TabStops.ClearAll()
}
```
