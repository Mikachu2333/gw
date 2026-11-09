# Document.HyphenationZone

返回或设置断字区的宽度（以磅为单位）。 **Long** 类型，可读写。



## 语法

express.**HyphenationZone**

express   一个代表 **Document** 对象的变量。

## 类型

number（int4 精度）

## 说明


断字区是 WPS 在一行最后一个单词与右边距间的保留的最大距离。



## 示例


```JavaScript
/*本示例为第一个文档启用自动断字功能，并将断字区的宽度设置为 36 磅（0.5 英寸）。*/
function test() {
    Documents.Item(1).AutoHyphenation = true
    Documents.Item(1).HyphenationZone = 36
}
```


```JavaScript
/*本示例将断字区的宽度设置为 0.25 英寸（18 磅），并启用活动文档的手动断字功能。*/
function test() {
    ActiveDocument.HyphenationZone = InchesToPoints(0.25)
    ActiveDocument.ManualHyphenation()
}
```
