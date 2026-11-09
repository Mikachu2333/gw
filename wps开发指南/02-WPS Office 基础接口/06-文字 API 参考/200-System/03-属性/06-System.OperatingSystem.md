# System.OperatingSystem

返回当前操作系统的名称，如“Windows”或“Windows NT”。 **String** 类型，只读。



## 语法

express.**OperatingSystem**

express   一个代表 **System** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示一条包括当前操作系统名称的消息。*/
function test() {
    alert("This computer is running " + Application.System.OperatingSystem)
}
```


```JavaScript
/*本示例判断如果用户的操作系统为Windows系统，则通知用户。*/
function test() {
    if (System.OperatingSystem.includes("Windows")) {
        alert("你的操作系统为Windows。")
    }
}
```
