# Paragraph.FirstLineIndent

返回或设置首行缩进或悬挂缩进的大小（以磅值表示）。用正数设置首行缩进的尺寸，用负数设置悬挂缩进的尺寸。 **Single** 类型，可读写。



## 语法

express.**FirstLineIndent**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例为活动文档的首段设置 1 英寸的首行缩进。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).FirstLineIndent = InchesToPoints(1)
}
```


```JavaScript
/*本示例为活动文档的第二段设置 0.5 英寸的悬挂缩进。InchesToPoints 方法用来将英寸转化为磅值。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).FirstLineIndent = InchesToPoints(-0.5)
}
```
