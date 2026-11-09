# Application.DefaultFilePath

返回或设置 ET 打开文件时使用的默认路径。 **String** 类型，可读写。



## 语法

express.**DefaultFilePath**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示当前默认文件路径。*/
function test() {
    MsgBox(`The current default file path is ${Application.DefaultFilePath}`)
}
```


```JavaScript
/*本示例设置ET打开文件时使用的默认路径，并通知用户。*/
function test() {
    Application.DefaultFilePath = "D:/temp"
    alert(Application.DefaultFilePath)
}
```
