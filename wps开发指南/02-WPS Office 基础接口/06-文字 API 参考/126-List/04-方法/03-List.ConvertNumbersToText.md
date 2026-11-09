# List.ConvertNumbersToText

将指定的 **List** 对象中的列表编号和 LISTNUM 域更改为文本。



## 语法

express.**ConvertNumbersToText(NumberType)**

express   一个代表 **List** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NumberType | 可选 | any | 指定将更改为文本的编号类型。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档的第一个列表的编号转换为文本。*/
function test() {
    ActiveDocument.Lists.Item(1).ConvertNumbersToText()
}
```


```JavaScript
/*本示例将活动文档的主文档文章中第一个带有格式的列表的编号转换为文本，但不影响 LISTNUM 域。*/
function test() {
    let list = ActiveDocument.Content.ListFormat.List
    list.ConvertNumbersToText(wdNumberParagraph)
}
```
