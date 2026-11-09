# Options.AutoFormatDeleteAutoSpaces

如果 WPS 在自动设置文档或区域的格式时，删除日文和西文文字之间插入的空格，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatDeleteAutoSpaces**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 自动删除日文和西文文字之间的空格。*/
function test() {
    Options.AutoFormatDeleteAutoSpaces = true
}
```


```JavaScript
/*本示例判断如果 WPS 自动删除日文和西文文字之间的空格，则通知用户。*/
function test() {
    if (Options.AutoFormatDeleteAutoSpaces) {
        alert("自动删除日文和西文文字之间的空格。")
    }
}
```
