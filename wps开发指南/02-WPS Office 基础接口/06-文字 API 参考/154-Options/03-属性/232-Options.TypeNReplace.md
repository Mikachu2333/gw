# Options.TypeNReplace

如果为 **True** ，则 WPS 将替换非法的南亚字符。 **Boolean** 类型，可读写。



## 语法

express.**TypeNReplace**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 替换非法的南亚字符。*/
function test() {
    Application.Options.TypeNReplace = true
}
```


```JavaScript
/*本示例判断如果 WPS 替换非法的南亚字符，则通知用户。*/
function test() {
    if (Application.Options.TypeNReplace) {
        alert("WPS 将替换非法的南亚字符")
    }
}
```
