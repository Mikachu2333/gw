# ParagraphFormat.IndentFirstLineCharWidth

将一个或多个段落的首行缩进指定的字符数。



## 语法

express.**IndentFirstLineCharWidth(Count)**

express   一个代表 **ParagraphFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Count | 必选 | number（short 精度） | 每个指定段落的首行要缩进的字符数。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将所选段落的首行缩进 10 个字符。*/
function test() {
    Selection.ParagraphFormat.IndentFirstLineCharWidth(10)
}
```


```JavaScript
/*本示例将活动文档中第一段的首行缩进 10 个字符。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Format.IndentFirstLineCharWidth(10)
}
```
