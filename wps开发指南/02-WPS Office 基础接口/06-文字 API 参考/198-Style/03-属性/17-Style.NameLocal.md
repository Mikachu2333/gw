# Style.NameLocal

返回由用户语言表示的内置样式的名称。可读写 **String** 类型。



## 语法

express.**NameLocal**

express   一个代表 **Style** 对象的变量。

## 类型

string

## 说明


通过设置该属性可为用户定义的样式重新命名，或者为内置样式添加别名。



## 示例


```JavaScript
/*本示例显示应用于选定段落的样式名（由用户语言表示）。如果应用于选定段落的样式不止一个，则显示第一个样式名。*/
function test() {
    alert(Selection.Paragraphs.Style.NameLocal)
}
```


```JavaScript
/*本示例在活动文档中为“标题 1”样式添加别名“NewH1”。*/
function test() {
    ActiveDocument.Styles.Item("标题 1").NameLocal = "NewH1"
}
```


```JavaScript
/*本示例将名为“Test”的样式重新命名为“Intro”。*/
function test() {
    ActiveDocument.Styles.Item("Test").NameLocal = "Intro"
}
```
