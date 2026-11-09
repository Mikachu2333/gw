# TabStop.Alignment

返回或设置一个 **WdTabAlignment** 常量，该常量代表指定制表位的对齐方式，可读写。



## 语法

express.**Alignment**

express   一个代表 **TabStop** 对象的变量。

## 类型

WdTabAlignment

## 示例


```JavaScript
/*本示例将活动文档首段的第一个制表位设置为居中对齐。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).TabStops.Item(1).Alignment = wdAlignTabCenter
}
```


```JavaScript
/*本示例显示选中的第一个段落的第二个制表位的对齐方式是否为右对齐。*/
function test() {
    alert(Application.Selection.Paragraphs.Item(1).TabStops.Item(2).Alignment == wdAlignTabRight)
}
```
