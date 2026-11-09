# Words.First

返回一个 **Range** 对象，该对象代表单词集合中的第一个单词。



## 语法

express.**First**

express   一个代表 **Words** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示选定内容的第一个单词。*/
function test() {
    alert(Application.Selection.Words.First.Text)
}
```


```JavaScript
/*本示例将选中活动文档中第一个单词。*/
function test() {
    ActiveDocument.Words.First.Select()
}
```
