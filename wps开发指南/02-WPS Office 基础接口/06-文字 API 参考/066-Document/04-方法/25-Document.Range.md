# Document.Range

通过使用指定的开始和结束字符位置返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象。



## 语法

express.**Range(Start, End)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Start | 可选 | any | 开始字符位置。 |
| End | 可选 | any | 结束字符位置。 |

## 返回值

Range

## 示例


```JavaScript
/*本示例为活动文档中的前 10 个字符设置加粗格式。*/
function test() {
    ActiveDocument.Range(0, 10).Bold = msoTrue
}
```


```JavaScript
/*本示例创建一个区域，该区域的起点位于活动文档的开始处，终点位于光标的位置，然后将该区域内的所有字符转换为大写。*/
function test() {
    let range = ActiveDocument.Range(0, Selection.End)
    range.Case = wdUpperCase
}
```


```JavaScript
/*本示例将活动文档中的第 2 段到第 4 段设置为右对齐。*/
function test() {
    if (ActiveDocument.Paragraphs.Count >= 6) {
        let range = ActiveDocument.Range(ActiveDocument.Paragraphs.Item(2).Range.Start, ActiveDocument.Paragraphs.Item(4).Range.End)
        range.Paragraphs.Alignment = wdAlignParagraphRight
    }
}
```
