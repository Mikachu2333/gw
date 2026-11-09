# Document.Words

返回一个 **[Words](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Words/obj)** 集合，该集合代表文档中的所有字词。只读。



## 语法

express.**Words**

express   一个代表 **Document** 对象的变量。

## 类型

Words

## 说明


文档中的标点符号和段落标记也包括在 **Words** 集合中。



## 示例


```JavaScript
/*本示例显示第一个文档中的字数。段落标记、部分单词和标点符号都统计在内。*/
function test() {
    alert("There are " + Documents.Item(1).Words.Count + " words.")
}
```


```JavaScript
/*本示例遍历活动文档中的单词，并删除该文档中出现的任何“Franklin”。*/
function test() {
    let words = ActiveDocument.Words
    for (let i = words.Count; i >= 1; i--) {
        if (words.Item(i).Text == "Franklin") {
            words.Item(i).Delete()
        }
    }
}
```
