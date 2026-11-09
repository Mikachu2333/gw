# ListParagraphs.Item

返回集合中的单个 **Paragraph** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **ListParagraphs** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

Paragraph

## 示例


```JavaScript
/*本示例显示活动文档中第一个列表的第一个列表段落的文档部分的文本。*/
function test() {
    let paragraph = ActiveDocument.Lists.Item(1).ListParagraphs.Item(1)
    alert(paragraph.Range.Text)
}
```


```JavaScript
/*本示例设置活动文档中第二个列表段落为居中对齐。*/
function test() {
    ActiveDocument.ListParagraphs.Item(2).Alignment = wdAlignParagraphCenter
}
```
