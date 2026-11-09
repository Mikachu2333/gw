# Application.ArbitraryXMLSupportAvailable

 返回一个 **Boolean** 类型的值，该值表示 ET 中的 XML 功能是否可用。只读。



## 语法

express.**ArbitraryXMLSupportAvailable**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例演示ET中的XML功能是否可用。*/
function test() {
    alert("ET中的XML功能是否可用：" + Application.ArbitraryXMLSupportAvailable)
}
```


```JavaScript
/*本示例演示 ArbitraryXMLSupportAvailable 的数据类型。*/
function test() {
    alert("ArbitraryXMLSupportAvailable 的数据类型为：" + typeof (Application.ArbitraryXMLSupportAvailable))
}
```
