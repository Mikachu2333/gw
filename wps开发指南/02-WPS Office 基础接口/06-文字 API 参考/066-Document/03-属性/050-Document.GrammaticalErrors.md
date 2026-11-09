# Document.GrammaticalErrors

返回一个 **[ProofreadingErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ProofreadingErrors/obj)** 集合，该集合代表指定的文档中有语法检查错误的句子。只读。



## 语法

express.**GrammaticalErrors**

express   一个代表 **Document** 对象的变量。

## 类型

ProofreadingErrors

## 说明


在每个句子中可有多个错误。如果没有语法错误，由 **GrammaticalErrors** 属性返回的 **[ProofreadingErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ProofreadingErrors/obj)** 集合的 **Count** 属性的返回值为 0。



## 示例


```JavaScript
/*本示例检查活动文档的语法错误，如果没有错误便通知用户，如果发现任何错误，则重新开始拼写和语法检查。*/
function test() {
    if (ActiveDocument.GrammaticalErrors.Count == 0) {
        alert("There are no grammatical errors.")
    } else {
        ActiveDocument.CheckGrammar()
    }
}
```


```JavaScript
/*本示例显示第一个文档中校对错误的类型是否为wdSpellingError。*/
function test() {
    alert(Documents.Item(1).GrammaticalErrors.Type == wdSpellingError)
}
```
