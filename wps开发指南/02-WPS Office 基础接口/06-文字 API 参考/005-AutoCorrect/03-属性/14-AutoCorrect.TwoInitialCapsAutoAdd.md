# AutoCorrect.TwoInitialCapsAutoAdd

如果为 **True** ，则 WPS 将单词自动添至“‘自动更正’前两个字母连续大写”例外项列表。如果将 WPS 自动更改为小写字母的（跟随大写首字母的）大写字母删除并重新键入，则会将一个单词添至该列表中。 **Boolean** 类型，可读写。



## 语法

express.**TwoInitialCapsAutoAdd**

express   一个代表 **AutoCorrect** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 将单词自动添加至“自动更正”中“前两个字母连续大写”的例外项列表。*/
function test() {
    Application.AutoCorrect.TwoInitialCapsAutoAdd = true
}
```


```JavaScript
/*本示例显示是否自动将单词添加至“自动更正”中“前两个字母连续大写”的例外项列表。*/
function test() {
    alert(Application.AutoCorrect.TwoInitialCapsAutoAdd)
}
```
