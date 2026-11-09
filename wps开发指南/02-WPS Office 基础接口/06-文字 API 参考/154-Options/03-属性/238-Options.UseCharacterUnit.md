# Options.UseCharacterUnit

如果 WPS 在当前文档中使用字符作为默认度量单位，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**UseCharacterUnit**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为使用字符作为默认度量单位。*/
function test() {
    Options.UseCharacterUnit = true
}
```


```JavaScript
/*本示例判断如果 WPS 在当前文档中使用字符作为默认度量单位，则通知用户。*/
function test() {
    if (Application.Options.UseCharacterUnit) {
        alert("WPS 在当前文档中使用字符作为默认度量单位")
    }
}
```
