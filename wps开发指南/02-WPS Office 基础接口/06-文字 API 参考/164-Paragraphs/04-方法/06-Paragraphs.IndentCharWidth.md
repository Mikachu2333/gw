# Paragraphs.IndentCharWidth

将一个或多个段落缩进指定的字符数。



## 语法

express.**IndentCharWidth(Count)**

express   一个代表 **Paragraphs** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Count | 必选 | number（short 精度） | 指定段落要缩进的字符数。 |

## 返回值

void

## 说明


此方法等效于单击 **“开始”** 选项卡上的 **“增加缩进量”** 按钮。



## 示例


```JavaScript
/*本示例将活动文档的所有段落缩进 10 个字符。*/
function test() {
    ActiveDocument.Paragraphs.IndentCharWidth(10)
}
```


```JavaScript
/*本示例判断第一个文档中所有段落的读取次序如果为从左到右，则所有段落缩进 3 个字符。*/
function test() {
    if (Documents.Item(1).Paragraphs.ReadingOrder == wdReadingOrderLtr) {
        Documents.Item(1).Paragraphs.IndentCharWidth(3)
    }
}
```
