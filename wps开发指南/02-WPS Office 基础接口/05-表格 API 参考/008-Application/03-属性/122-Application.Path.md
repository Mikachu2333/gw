# Application.Path

返回一个 **String** 值，它代表应用程序的完整路径，不包括末尾的分隔符和应用程序名称。



## 语法

express.**Path**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例显示 ET 的完整路径。*/
function test() {
    alert("The path is " + Application.Path)
}
```


```JavaScript
/*此示例显示返回的路径的长度*/
function test() {
    alert(Application.Path.length)
}
```
