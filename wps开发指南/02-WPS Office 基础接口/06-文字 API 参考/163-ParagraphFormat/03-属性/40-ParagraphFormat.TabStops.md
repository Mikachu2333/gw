# ParagraphFormat.TabStops

返回或设置一个 **TabStops** 集合，该集合代表指定段落中的所有自定义制表位。可读写。



## 语法

express.**TabStops**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

TabStops

## 示例


```JavaScript
/*本示例在活动文档各段的 2 英寸处添加居中的制表位。InchesToPoints 方法用来将英寸转换为磅。*/
function test() {
    ActiveDocument.Paragraphs.Format.TabStops.Add(InchesToPoints(2), wdAlignTabCenter)
}
```


```JavaScript
/*本示例将活动文档中各段的制表位设置为与第一段的制表位一致。*/
function test() {
    let tabStops = ActiveDocument.Paragraphs.Item(1).Format.TabStops
    ActiveDocument.Paragraphs.Format.TabStops = tabStops
}
```
