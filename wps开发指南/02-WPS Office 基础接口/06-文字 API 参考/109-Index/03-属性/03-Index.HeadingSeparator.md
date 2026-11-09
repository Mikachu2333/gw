# Index.HeadingSeparator

返回或设置索引中字母组（以相同字母开头的条目）之间的文字。与 INDEX 域中的 \\h 开关相对应。 **WdHeadingSeparator** 类型，可读写。



## 语法

express.**HeadingSeparator**

express   一个代表 **Index** 对象的变量。

## 类型

WdHeadingSeparator

## 示例


```JavaScript
/*本示例将活动文档中第一个索引的格式设置为单列，并用相应的字母来导引各字母组。*/
function test() {
    if (ActiveDocument.Indexes.Count >= 1) {
        let index = ActiveDocument.Indexes.Item(1)
        index.NumberOfColumns = 1
        index.HeadingSeparator = wdHeadingSeparatorLetter
    }
}
```


```JavaScript
/*本示例判断第一个文档的第二个索引中字母组之间的文字分隔符，并通知用户。*/
function test() {
    let index = Documents.Item(1).Indexes.Item(2)
    switch (index.HeadingSeparator) {
        case wdHeadingSeparatorBlankLine:
            alert("分隔符为空行")
            break
        case wdHeadingSeparatorLetter:
            alert("分隔符为指定的字母")
            break
        case wdHeadingSeparatorLetterFull:
            alert("分隔为指定的大写字母")
            break
        case wdHeadingSeparatorLetterLow:
            alert("分隔符为指定的小写字母")
            break
        case wdHeadingSeparatorNone:
            alert("没有分隔符")
            break
    }
}
```
