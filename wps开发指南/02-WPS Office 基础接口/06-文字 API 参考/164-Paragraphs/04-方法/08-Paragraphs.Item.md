# Paragraphs.Item

返回集合中的单个 **Paragraph** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Paragraphs** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

Paragraph

## 示例


```JavaScript
/*本示例将活动文档的第一段缩进 10 个字符。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).IndentCharWidth(10)
}
```


```JavaScript
/*本示例显示第一个文档的第二段是否为居中对齐。*/
function test() {
    alert(Documents.Item(1).Paragraphs.Item(2).Alignment == wdAlignParagraphCenter)
}
```
