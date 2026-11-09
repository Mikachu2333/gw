# Application.Version

返回 WPS 版本号。 **String** 类型，只读。



## 语法

express.**Version**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示 WPS 的版本号。*/
function test() {
    alert("The version of WPS is " + Application.Version)
}
```


```JavaScript
/*本示例在光标处插入 WPS 的版本号。*/
function test() {
    Selection.TypeText(Application.Version)
}
```
