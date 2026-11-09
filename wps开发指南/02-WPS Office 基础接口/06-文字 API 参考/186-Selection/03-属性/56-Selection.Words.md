# Selection.Words

返回一个 **[Words](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Words/obj)** 集合，该集合代表选定内容中的所有字词。只读。



## 语法

express.**Words**

express   一个代表 **Selection** 对象的变量。

## 类型

Words

## 说明


文档中的标点符号和段落标记包括在 **Words** 集合中。



## 示例


```JavaScript
/*本示例显示选定内容的字数。段落标记、部分单词和标点符号都统计在内。*/
function test() {
    alert(`There are ${Selection.Words.Count} words.`)
}
```


```JavaScript
/*本示例将第一个窗口中所选的第一个单词字体设置为加粗。*/
function test() {
    Windows.Item(1).Selection.Words.Item(1).Font.Bold = msoTrue
}
```
