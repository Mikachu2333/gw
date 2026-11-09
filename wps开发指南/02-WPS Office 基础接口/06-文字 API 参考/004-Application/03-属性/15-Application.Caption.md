# Application.Caption

返回或设置应用程序窗口的标题栏中显示的文本。 **String** 类型，可读写。



## 语法

express.**Caption**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 说明


要将应用程序窗口的标题改为默认文本，请将该属性设置为空字符串（""）。



## 示例


```JavaScript
/*本示例重新设置应用程序窗口的标题。*/
function test() {
    Application.Caption = ""
}
```


```JavaScript
/*本示例更改 WPS 应用程序窗口的标题，使其包括用户名。*/
function test() {
    Application.Caption = Application.UserName + "'s copy of WPS"
}
```
