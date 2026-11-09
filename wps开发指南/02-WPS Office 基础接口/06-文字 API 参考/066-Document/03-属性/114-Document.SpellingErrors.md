# Document.SpellingErrors

返回一个 **[ProofreadingErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ProofreadingErrors/obj)** 集合，该集合代表在指定文档或区域中标识为拼写错误的单词。只读。



## 语法

express.**SpellingErrors**

express   一个代表 **Document** 对象的变量。

## 类型

ProofreadingErrors

## 示例


```JavaScript
/*本示例检查活动文档的拼写错误，并显示找到的错误数目。*/
function test() {
    let count = ActiveDocument.SpellingErrors.Count
    if (count == 0) {
        alert("No spelling errors found.")
    } else {
        alert(count + " spelling errors found.")
    }
}
```


```JavaScript
/*本示例将第一个文档中第一个拼写错误的单词的字体格式设置为红色加粗字体。*/
function test() {
    let range = Documents.Item(1).SpellingErrors.Item(1)
    range.Font.ColorIndex = wdRed
    range.Font.Bold = msoTrue
}
```
