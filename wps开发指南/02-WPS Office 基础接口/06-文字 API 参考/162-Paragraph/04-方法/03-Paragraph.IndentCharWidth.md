# Paragraph.IndentCharWidth

将段落缩进指定的字符数。



## 语法

express.**IndentCharWidth(Count)**

express   一个代表 **Paragraph** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Count | 必选 | number（short 精度） | 指定段落要缩进的字符数。 |

## 返回值

void

## 说明


此方法等效于单击 **“格式”** 工具栏上的 **“增加缩进量”** 按钮。



## 示例


```JavaScript
/*本示例将活动文档的第一段缩进 10 个字符。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).IndentCharWidth(10)
}
```


```JavaScript
/*本示例将第一个文档的第二段缩进 2 个字符。*/
function test() {
    Documents.Item(1).Paragraphs.Item(2).IndentCharWidth(2)
}
```
