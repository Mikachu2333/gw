# Application.PathSeparator

返回路径分隔符 (“\\”)。 **String** 类型，只读。



## 语法

express.**PathSeparator**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示当前路径分隔符。*/
function test() {
    alert(`The path separator character is ${Application.PathSeparator}`)
}
```


```JavaScript
/*本示例将路径分隔符赋值给A1单元格。*/
function test() {
    Range("A1").Value2 = Application.PathSeparator
}
```
