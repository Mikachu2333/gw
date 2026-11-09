# System.Version

返回操作系统的版本号。只读 **String** 类型。



## 语法

express.**Version**

express   一个代表 **System** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示操作系统的版本号。*/
function test() {
    alert("The system version is " + Application.System.Version)
}
```


```JavaScript
/*本示例在光标处插入操作系统的版本号。*/
function test() {
    Selection.TypeText(Application.System.Version)
}
```
