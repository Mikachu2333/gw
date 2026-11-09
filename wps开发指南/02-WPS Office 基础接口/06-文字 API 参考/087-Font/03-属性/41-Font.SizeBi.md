# Font.SizeBi

返回或设置字体大小（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**SizeBi**

express   一个代表 **Font** 对象的变量。

## 类型

number（float 精度）

## 说明


 **SizeBi** 属性适用于使用从右向左语言的文本。



## 示例


```JavaScript
/*本示例将活动文档上第一个段落中文档部分的第一个单词的字号设置为 20 磅。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.Words.Item(1).Font.SizeBi = 20
}
```


```JavaScript
/*本示例显示第一个文档上第一个段落中文档部分的字号。*/
function test() {
    let range = Application.Documents.Item(1).Paragraphs.Item(1).Range
    alert(range.Font.SizeBi)
}
```
