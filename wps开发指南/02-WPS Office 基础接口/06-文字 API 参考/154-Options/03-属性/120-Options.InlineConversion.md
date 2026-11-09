# Options.InlineConversion

如果 WPS 将中文输入法（IME）中的未确认字符串显示为已有（已确认的）字符串之间的插入项，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**InlineConversion**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设定 WPS 将中文输入法（IME）中的未确认字符串显示为已有（已确认的）字符串之间的插入项。*/
function test() {
    Options.InlineConversion = true
}
```


```JavaScript
/*本示例判断如果 WPS 将中文输入法（IME）中的未确认字符串显示为已有（已确认的）字符串之间的插入项，则通知用户。*/
function test() {
    if (Options.InlineConversion) {
        alert("WPS 将中文输入法（IME）中的未确认字符串显示为已有（已确认的）字符串之间的插入项。")
    }
}
```
