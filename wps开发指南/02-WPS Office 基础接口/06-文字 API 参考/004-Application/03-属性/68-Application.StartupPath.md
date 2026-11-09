# Application.StartupPath

返回或设置启动文件夹的完整路径，不包括最后的分隔符。 **String** 类型，可读写。



## 语法

express.**StartupPath**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 说明


启动 WPS 时，将自动装载启动文件夹中的模板和加载项。



## 示例


```JavaScript
/*本示例显示启动文件夹的完整路径。*/
function test() {
    alert(Application.StartupPath)
}
```


```JavaScript
/*本示例使用户可更改启动文件夹的路径。*/
function test() {
    let intResponse = MsgBox("Do you want to change the startup path?", jsOKCancel)
    if (intResponse == jsResultOK) {
        let startupPath = InputBox("Type a startup path")
        Application.StartupPath = startupPath
    }
}
```
