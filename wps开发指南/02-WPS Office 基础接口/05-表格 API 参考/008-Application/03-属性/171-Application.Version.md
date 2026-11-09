# Application.Version

返回一个 **String** 值，它代表 ET 版本号。



## 语法

express.**Version**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例显示包含 ET 版本号和操作系统名称的消息框。*/
function test() {
    alert(`Welcome to ET version ${Application.Version} running on ${Application.OperatingSystem}!`)
}
```


```JavaScript
/*此示例将 ET 的版本转成Number类型，并显示。*/
function test() {
    alert(Number(Application.Version))
}
```
