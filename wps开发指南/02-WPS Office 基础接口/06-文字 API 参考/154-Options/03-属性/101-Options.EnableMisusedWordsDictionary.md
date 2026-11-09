# Options.EnableMisusedWordsDictionary

如果 WPS 在检查文档的拼写和语法时，也检查误用的单词，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**EnableMisusedWordsDictionary**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


在检查误用单词时，WPS 将检查以下内容：形容词和副词、比较级和最高级、“like”作为连词、“nor”与“or”、“what”与“which”、“who”与“whom”、度量单位、连词、介词和代名词的不正确用法。



## 示例


```JavaScript
/*本示例设定 WPS 在拼写和语法检查中忽略误用的单词。*/
function test() {
    Options.EnableMisusedWordsDictionary = false
}
```


```JavaScript
/*本示例判断如果 WPS 在拼写和语法检查中检查误用的单词，则通知用户。*/
function test() {
    if (Options.EnableMisusedWordsDictionary) {
        alert("WPS 在拼写和语法检查中检查误用的单词。")
    }
}
```
