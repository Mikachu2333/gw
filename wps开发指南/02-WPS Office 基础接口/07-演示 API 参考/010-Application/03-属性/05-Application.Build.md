# Application.Build

返回 WPP 当前实例的内部版本号。只读。



## 语法

express.**Build**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示 WPP 内部版本号。*/
function test() {
    alert(Application.Build)
}
```


```JavaScript
/*本示例在一个消息框中显示 WPP 版本号和内部版本号。*/
function test() {
    alert(`Welcome to WPP version ${Application.Version}, build ${Application.Build}!`)
}
```
