# AutoCorrect.CorrectInitialCaps

在某个单词的前两个字母均为大写时，如果为 **True** ，则 WPS 自动将第二个字母转换为小写。例如，“WPs”将更正为“Wps”。 **Boolean** 类型，可读写。



## 语法

express.**CorrectInitialCaps**

express   一个代表 **AutoCorrect** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS，使其自动更正首字母大写的错误。*/
function test() {
    Application.AutoCorrect.CorrectInitialCaps = true
}
```


```JavaScript
/*本示例显示其是否自动更正首字母大写的错误。*/
function test() {
    alert(Application.AutoCorrect.CorrectInitialCaps)
}
```
