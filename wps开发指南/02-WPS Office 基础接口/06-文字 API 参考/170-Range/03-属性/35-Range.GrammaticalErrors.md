# Range.GrammaticalErrors

返回一个 **ProofreadingErrors** 集合，该集合代表指定文档或区域中有语法检查错误的句子。只读。



## 语法

express.**GrammaticalErrors**

express   一个代表 **Range** 对象的变量。

## 类型

ProofreadingErrors

## 说明


在每个句子中可有多个错误。如果文档中没有语法错误，则由 **GrammaticalErrors** 属性返回的 **ProofreadingErrors** 对象的 **Count** 属性的返回值为 0（零）。

有关返回集合中单个成员的信息，请参阅返回集合中的对象。



## 示例


```JavaScript
/*本示例检查活动文档的第三段的语法错误，并显示包含一个或多个错误的每一句。*/
function test() {
    let errors = ActiveDocument.Paragraphs.Item(3).Range.GrammaticalErrors
    for (let i = 1; myerr <= errors.Count; i++) {
        alert(errors.Item(i).Text)
    }
}
```


```JavaScript
/*本示例显示活动文档的第一段语法错误的数量。*/
function test() {
    alert(ActiveDocument.Paragraphs.Item(1).Range.GrammaticalErrors.Count)
}
```
