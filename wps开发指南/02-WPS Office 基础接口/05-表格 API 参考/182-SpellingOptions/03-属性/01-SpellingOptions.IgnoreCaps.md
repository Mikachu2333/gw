# SpellingOptions.IgnoreCaps

如果该属性值为 **False** ，则指示 ET 检查大写单词。如果该值为 **True** ，则指示 ET 在使用拼写检查时忽略大写单词。可读/写 **Boolean** 类型。



## 语法

express.**IgnoreCaps**

express   一个代表 **SpellingOptions** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*在本示例中，ET 将确定检查大写单词的拼写时使用何种设置，并通知给用户。*/
function test() {
    if (Application.SpellingOptions.IgnoreCaps) {
        alert("Spelling options for checking uppercase words is disabled.")
    } else {
        alert("Spelling options for checking uppercase words is enabled.")
    }
}
```


```JavaScript
/*本示例设置 ET 在使用拼写检查时检查大写单词。*/
function test() {
    Application.SpellingOptions.IgnoreCaps = false
}
```
