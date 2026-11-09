# AutoCorrect.CorrectDays

如果 WPS 自动大写星期日期单词的首字母，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CorrectDays**

express   一个代表 **AutoCorrect** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 以使其自动大写星期日期单词的首字母。*/
function test() {
    Application.AutoCorrect.CorrectDays = true
}
```


```JavaScript
/*本示例将切换 CorrectDays 属性的值。*/
function test() {
    Application.AutoCorrect.CorrectDays = !Application.AutoCorrect.CorrectDays
}
```
