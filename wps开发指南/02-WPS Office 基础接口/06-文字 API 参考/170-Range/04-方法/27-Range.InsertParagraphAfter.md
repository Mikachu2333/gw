# Range.InsertParagraphAfter

在范围之后插入段落标记。



## 语法

express.**InsertParagraphAfter()**

express   一个代表 **Range** 对象的变量。

## 返回值

void

## 说明


在应用此方法之后，该范围会扩展，以包含新段落。



## 示例


```JavaScript
/*本示例在活动文档的开头将文本作为一个新段落插入。*/
function test() {
    let range = ActiveDocument.Range(0, 0)
    range.InsertBefore("Title")
    range.ParagraphFormat.Alignment = wdAlignParagraphCenter
    range.InsertParagraphAfter()
}
```
 **Content** 属性返回一个 **Range** 对象。



```JavaScript
/*本示例在活动文档的末尾插入一个段落。*/
function test() {
    ActiveDocument.Content.InsertParagraphAfter()
}
```
