# AutoCorrect.HangulAndAlphabetAutoAdd

如果 WPS 会自动将单词添至朝鲜文和字母顺序“自动更正”例外项列表中，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**HangulAndAlphabetAutoAdd**

express   一个代表 **AutoCorrect** 对象的变量。

## 类型

boolean

## 说明


朝鲜文和字母顺序“自动更正”例外项列表位于 **“‘自动更正’例外项”** 对话框中的 **“朝鲜语”** 选项卡上。如果删除并重新键入一个不希望 WPS 更正的单词，WPS 会将该单词添至该列表。



## 示例


```JavaScript
/*本示例设置 WPS 自动将单词添至朝鲜文和字母顺序“自动更正”例外项列表。*/
function test() {
    Application.AutoCorrect.HangulAndAlphabetAutoAdd = true
}
```


```JavaScript
/*本示例显示是否自动将单词添至朝鲜文和字母顺序“自动更正”例外项列表*/
function test() {
    alert(Application.AutoCorrect.HangulAndAlphabetAutoAdd)
}
```
