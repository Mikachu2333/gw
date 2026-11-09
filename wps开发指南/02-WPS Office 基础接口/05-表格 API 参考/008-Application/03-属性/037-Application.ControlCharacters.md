# Application.ControlCharacters

如果 ET 显示从右到左语言的控制字符，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ControlCharacters**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


只有在安装和选择了从右到左语言支持时，才可以设置该属性。



## 示例


```JavaScript
/*本示例设置 ET 使其解释控制字符。*/
function test() {
    Application.ControlCharacters = true
}
```


```JavaScript
/*本示例演示ControlCharacters属性的数据类型，将ControlCharacters属性的值设置为false。*/
function test() {
    alert(`ControlCharacters属性的数据类型为：${typeof Application.ControlCharacters}\nControlCharacters属性的值为：${Application.ControlCharacters}`)
    Application.ControlCharacters = false
}
```
