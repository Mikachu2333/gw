# Options.AutoFormatAsYouTypeDeleteAutoSpaces

如果为 **True** ，则 WPS 会在用户键入时自动删除日文和拉丁文文字之间插入的空格。可读写。



## 语法

express.**AutoFormatAsYouTypeDeleteAutoSpaces**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在用户键入时自动删除日文和拉丁文文字之间插入的空格。*/
function test() {
    Options.AutoFormatAsYouTypeDeleteAutoSpaces = true
}
```


```JavaScript
/*本示例判断如果 WPS 在用户键入时自动删除日文和拉丁文文字之间插入的空格，则通知用户。*/
function test() {
    if (Options.AutoFormatAsYouTypeDeleteAutoSpaces) {
        alert("用户输入时自动删除日文和拉丁文文字之间插入的空格。")
    }
}
```
