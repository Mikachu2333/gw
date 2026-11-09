# Range.InRange

如果应用此方法的范围包含在由参数 _Range_ 指定的范围内，则该方法返回 **True** 。



## 语法

express.**InRange(Range)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 指定此方法用来确定其是否包含在指定的 **Range** 对象内的范围。 |

## 返回值

Boolean

## 说明


此方法通过比较起始字符和结束字符的位置以及文字部分（文章：包含文档中可区别于其他文字区域的文字区域。例如，如果文档包括正文文本、脚注和标题，则文章包含主文章、脚注文章和标题文章。）的类型，来确定表达式返回的区域是否包含在指定的 _Range_ 内。



## 示例


```JavaScript
/*本示例将 range 设置为活动文档的第一个单词，如果 range 不包含在所选区域中，则选择 range。*/
function test() {
    let range = ActiveDocument.Words.Item(1)
    if (!range.InRange(Selection.Range)) {
        range.Select()
    }
}
```


```JavaScript
/*本示例判断如果所选区域包含在第一个文档的主文档文章中，则替换所选区域的文本。*/
function test() {
    let range = Documents.Item(1).Content
    if (Selection.Range.InRange(range)) {
        Selection.Range.Text = "example"
    }
}
```
