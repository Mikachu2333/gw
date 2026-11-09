# Paragraph.Next

返回一个 **Paragraph** 对象，该对象代表下一段。



## 语法

express.**Next(Count)**

express   一个代表 **Paragraph** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Count | 可选 | any | 要前移的段落数。默认值为 1。 |

## 返回值

Paragraph

## 示例


```JavaScript
/*本示例在活动文档中的前九段前面分别插入一个数字和一个制表符。*/
function test() {
    for (let n = 0; n <= 8; n++) {
        let range = ActiveDocument.Paragraphs.Item(1).Next(n).Range
        range.Collapse(wdCollapseStart)
        range.InsertAfter(n + 1 + "\t")
    }
}
```


```JavaScript
/*本示例显示第一个文档的第二个段落的左缩进值（以磅为单位）。*/
function test() {
    alert(Documents.Item(1).Paragraphs.Item(1).Next().LeftIndent)
}
```
