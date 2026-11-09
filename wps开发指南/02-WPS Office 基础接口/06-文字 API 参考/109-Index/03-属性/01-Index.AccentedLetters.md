# Index.AccentedLetters

如果指定索引包含用于重音字母的单独的标题，则该属性值为 **True** （例如，以“À”开头的词位于一个标题下，而以“A”开头的词位于另一个标题下）。 **Boolean** 类型，可读写。



## 语法

express.**AccentedLetters**

express   一个代表 **Index** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动文档中第一个索引的格式设置为单列，并用相应的字母来导引各字母组，带重音符号的字母有单独的标题。*/
function test() {
    if (ActiveDocument.Indexes.Count >= 1) {
        let index = ActiveDocument.Indexes.Item(1)
        index.HeadingSeparator = wdHeadingSeparatorLetter
        index.NumberOfColumns = 1
        index.AccentedLetters = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上第二个索引是否包含用于重音字母的单独的标题。*/
function test() {
    let index = Documents.Item(1).Indexes.Item(2)
    alert(index.AccentedLetters)
}
```
