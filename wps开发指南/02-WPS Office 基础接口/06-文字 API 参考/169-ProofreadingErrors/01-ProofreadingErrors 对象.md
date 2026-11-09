# ProofreadingErrors 对象

指定文档或范围中的拼写错误和语法错误的集合。

## 说明


使用 **SpellingErrors** 或 **GrammaticalErrors** 属性可返回 **ProofreadingErrors** 集合。


## 示例


```JavaScript
/*本示例显示所选内容中的拼写和语法错误的数量。*/
function test() {
    let spellingErrors = Selection.Range.SpellingErrors
    let grammaticalErrors = Selection.Range.GrammaticalErrors
    alert("Spelling errors: " + spellingErrors.Count + "\n" + "Grammatical errors: " + grammaticalErrors.Count)
}
```
使用 **SpellingErrors** (_Index_) 可返回一个拼写错误（由 **Range** 对象表示），其中 _Index_ 为索引号。



```JavaScript
/*本示例选中所选内容中的第二个拼写错误。*/
function test() {
    let range = Selection.Range.SpellingErrors.Item(2)
    range.Select()
}
```
使用 **GrammarErrors** (_Index_) 可返回一个语法错误（由 **Range** 对象表示），其中 _Index_ 为索引号。



```JavaScript
/*本示例判断如果所选内容中语法错误的数量大于等于1，则显示第一个语法错误的句子。*/
function test() {
    let proofreadingErrors = Selection.Range.GrammaticalErrors
    if (proofreadingErrors.Count >= 1) {
        alert(proofreadingErrors.Item(1).Text)
    }
}
```
在一个文档中，以上集合的 **Count** 属性返回的只是正文中的拼写和语法错误个数。要统计其他部分中的拼写和语法错误个数，请使用带有 **Range** 对象的相应集合。如果文档或范围中所有单词的拼写和语法都正确，则 **ProofreadingErrors** 对象的 **Count** 属性返回 0（零），并且 **SpellingChecked** 属性和 **GrammarChecked** 属性返回 **True** 。

没有 ProofreadingError 对象；相反， **ProofreadingErrors** 集合中的每一项都是一个 **Range** 对象，该对象表示一个拼写或语法错误。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ProofreadingErrors/member/Item) | 返回集合中的单个 **Range** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ProofreadingErrors/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中更正错误的数目。只读。 |