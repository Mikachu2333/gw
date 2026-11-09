# AutoCorrect.CorrectSentenceCaps

如果 WPS文字 自动大写每个句子的首字母，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CorrectSentenceCaps**

express   一个代表 **AutoCorrect** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例切换 CorrectSentenceCaps 属性的值*/
function test() {
    Application.AutoCorrect.CorrectSentenceCaps = !Application.AutoCorrect.CorrectSentenceCaps
}
```


```JavaScript
/*本示例显示活动文档是否自动大写每个句子的首字母。*/
function test() {
    alert(Application.AutoCorrect.CorrectSentenceCaps)
}
```
