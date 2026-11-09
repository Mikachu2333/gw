# Options.StrictInitialAlefHamza

如果拼写检查使用针对以“alef hamza”开头的阿拉伯语单词的拼写规则，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**StrictInitialAlefHamza**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置拼写检查使用针对以“alef hamza”开头的阿拉伯语单词的拼写规则。*/
function test() {
    Options.StrictInitialAlefHamza = true
}
```


```JavaScript
/*本示例判断如果拼写检查使用针对以“alef hamza”开头的阿拉伯语单词的拼写规则，则通知用户。*/
function test() {
    if (Options.StrictInitialAlefHamza) {
        alert("拼写检查使用针对以“alef hamza”开头的阿拉伯语单词的拼写规则。")
    }
}
```
