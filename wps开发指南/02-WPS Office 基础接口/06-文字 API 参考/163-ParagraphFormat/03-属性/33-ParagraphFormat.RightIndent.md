# ParagraphFormat.RightIndent

返回或设置指定段落的右缩进量（以磅为单位）。可读写 **Single** 类型。



## 语法

express.**RightIndent**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中所有段落的右缩进都设置为距右边缘 1 英寸。InchesToPoints 方法用来将英寸转换为磅。*/
function test() {
    ActiveDocument.Paragraphs.Format.RightIndent = InchesToPoints(1)
}
```


```JavaScript
/*本示例显示所选段落的右缩进量。*/
function test() {
    alert(Selection.ParagraphFormat.RightIndent + " 磅")
}
```
