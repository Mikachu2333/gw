# Options.StrictRussianE

如果拼写检查器使用有关使用严格 ë 字符的俄语单词的拼写规则，则该属性值为 **True** 。可读/写。



## 语法

express.**StrictRussianE**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置拼写检查器对使用严格 ë 字符的俄语单词使用拼写规则。*/
function test() {
    Application.Options.StrictRussianE = true
}
```


```JavaScript
/*本示例判断拼写检查器是否对使用严格 ë 字符的俄语单词使用拼写规则，并通知用户。*/
function test() {
    if (Application.Options.StrictRussianE) {
        alert("拼写检查器对使用严格 ë 字符的俄语单词使用拼写规则")
    } else {
        alert("拼写检查器未对使用严格 ë 字符的俄语单词使用拼写规则")
    }
}
```
