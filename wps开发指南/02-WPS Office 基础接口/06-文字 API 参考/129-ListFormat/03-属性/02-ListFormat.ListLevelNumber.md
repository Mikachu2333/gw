# ListFormat.ListLevelNumber

返回或设置指定的 **ListFormat** 对象中段落的列表级别。可读写 **Long** 类型。



## 语法

express.**ListLevelNumber**

express   一个代表 **ListFormat** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第三个段落的列表级别。*/
function test() {
    let listFormat = ActiveDocument.Paragraphs.Item(3).Range.ListFormat
    alert(listFormat.ListLevelNumber)
}
```


```JavaScript
/*本示例设置活动文档上所有段落的列表级别。*/
function test() {
    let listFormat = ActiveDocument.Content.ListFormat
    listFormat.ListLevelNumber = 2
}
```
