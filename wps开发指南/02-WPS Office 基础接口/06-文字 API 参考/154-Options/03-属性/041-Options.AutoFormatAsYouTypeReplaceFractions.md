# Options.AutoFormatAsYouTypeReplaceFractions

如果在您键入时，将使用当前字符集的分数替换键入的分数，则该属性值为 **True** 。例如，将“1/2”替换为“½”。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatAsYouTypeReplaceFractions**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例关闭键入分数的自动替换功能。*/
function test() {
    Options.AutoFormatAsYouTypeReplaceFractions = false
}
```


```JavaScript
/*本示例显示是否开启键入分数的自动替换功能。*/
function test() {
    alert(Options.AutoFormatAsYouTypeReplaceFractions)
}
```
