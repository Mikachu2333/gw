# ProofreadingErrors.Item

返回集合中的单个 **Range** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **ProofreadingErrors** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

Range

## 示例


```JavaScript
/*本示例显示活动文档上第一个拼写错误的单词的文本。*/
function test() {
    let range = ActiveDocument.SpellingErrors.Item(1)
    alert(range.Text)
}
```


```JavaScript
/*本示例显示第一个文档上第一个段落中第一个拼写错误的单词的字符数量。*/
function test() {
    let range = Documents.Item(1).Paragraphs.Item(1).Range.SpellingErrors.Item(1)
    alert(range.Characters.Count)
}
```
