# Application.EnableAutoComplete

如果启用记忆式键入功能，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**EnableAutoComplete**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启动记忆式键入功能。*/
function test() {
    Application.EnableAutoComplete = true
}
```


```JavaScript
/*本示例判断如果启用记忆式键入功能，则将EnableAutoComplete属性的值设置为false，并通知用户。*/
function test() {
    if (Application.EnableAutoComplete) {
        Application.EnableAutoComplete = false
        alert("已将EnableAutoComplete设置为false")
    }
}
```
