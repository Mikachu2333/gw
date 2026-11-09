# Application.CheckLanguage

如果 WPS 在键入时自动检测使用的语言，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CheckLanguage**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


如果未将 WPS 设为可用于多语言编辑，则 **CheckLanguage** 属性总返回 **False** 。



## 示例


```JavaScript
/*本示例将检查是否已激活自动语言检测功能。*/
function test() {
    if (Application.CheckLanguage) {
        alert("Automatic language detection is activated!")
    }
}
```


```JavaScript
/*本示例激活自动语言检测功能。*/
function test() {
    Application.CheckLanguage = true
}
```
