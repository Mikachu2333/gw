# ListFormat.ConvertNumbersToText

将指定 **ListFormat** 对象中的列表编号和 LISTNUM 域更改为文本。



## 语法

express.**ConvertNumbersToText(NumberType)**

express   一个代表 **ListFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NumberType | 可选 | any | 指定将更改为文本的编号类型。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将变量 range 设置为包括活动文档中第三段到第六段的一个区域，然后将该区域的预设编号转换为文本，而不影响任何 LISTNUM 域。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let range = ActiveDocument.Range(paragraphs.Item(3).Range.Start, paragraphs.Item(6).Range.End)
    range.ListFormat.ConvertNumbersToText(wdNumberParagraph)
}
```


```JavaScript
/*本示例将活动文档的主文档文章的列表编号更改为文本，且不影响任何 LISTNUM 域。*/
function test() {
    let listFormat = ActiveDocument.Content.ListFormat
    listFormat.ConvertNumbersToText(wdNumberParagraph)
}
```
