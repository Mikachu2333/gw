# Range.SpellingErrors

返回一个 **ProofreadingErrors** 集合，该集合代表指定范围中标识为拼写错误的单词。只读。



## 语法

express.**SpellingErrors**

express   一个代表 **Range** 对象的变量。

## 类型

ProofreadingErrors

## 示例


```JavaScript
/*本示例检查指定范围是否存在拼写错误，并显示找到的每个错误。*/
function test() {
    let errors = ActiveDocument.Paragraphs.Item(1).Range.SpellingErrors
    if (errors.Count == 0) {
        alert("No spelling errors found.")
    } else {
        for (let i = 1; i <= errors.Count; i++) {
            alert(errors.Item(i).Text)
        }
    }
}
```


```JavaScript
/*本示例设置所选区域中第一个拼写错误的单词的字体的粗体格式和字号。*/
function test() {
    let range = Selection.Range.SpellingErrors.Item(1)
    range.Font.Bold = msoTrue
    range.Font.Size = 15
}
```
