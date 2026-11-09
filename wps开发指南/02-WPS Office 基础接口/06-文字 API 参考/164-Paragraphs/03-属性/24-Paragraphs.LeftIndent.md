# Paragraphs.LeftIndent

返回或设置一个 **Single** 类型的值，该值代表指定段落的左缩进值（以磅为单位）。可读写。



## 语法

express.**LeftIndent**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中所有段落的左缩进都设置为 1 英寸。InchesToPoints 方法用来将英寸转换为磅。*/
function test() {
    ActiveDocument.Paragraphs.LeftIndent = InchesToPoints(1)
}
```


```JavaScript
/*本示例将所选段落的左缩进设置为18磅。*/
function test() {
    Selection.Paragraphs.LeftIndent = 18
}
```
