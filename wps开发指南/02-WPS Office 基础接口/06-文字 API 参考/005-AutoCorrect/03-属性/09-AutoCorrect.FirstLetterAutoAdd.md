# AutoCorrect.FirstLetterAutoAdd

如果 WPS 会自动将缩写词添至“自动更正”的“首字母大写”例外项列表中，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**FirstLetterAutoAdd**

express   一个代表 **AutoCorrect** 对象的变量。

## 类型

boolean

## 说明


在 WPS 把紧跟缩写词的句号后的字母转变为大写时，如果立即删除并重新键入该字母，WPS 就会将此缩写词添至该列表中。



## 示例


```JavaScript
/*本示例防止 WPS 把缩写词自动添至“自动更正”中的“首字母大写”例外项列表中。*/
function test() {
    Application.AutoCorrect.FirstLetterAutoAdd = false
}
```


```JavaScript
/*本示例显示是否自动将缩写词添至“自动更正”的“首字母大写”例外项*/
function test() {
    alert(Application.AutoCorrect.FirstLetterAutoAdd)
}
```
