# Words.Last

返回一个 **Range** 对象，该对象代表单词集合中的最后一个单词。



## 语法

express.**Last**

express   一个代表 **Words** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例对所选内容中的最后一个单词应用加粗格式。*/
function test() {
    if (Selection.Words.Count >= 2) {
        Selection.Words.Last.Bold = true
    }
}
```


```JavaScript
/*本示例显示所选内容中的最后一个单词。*/
function test() {
    alert(Selection.Words.Last.Text)
}
```
