# Application.OnWindow

返回或设置每当激活一个窗口时要运行的过程的名称。 **String** 型，可读写。



## 语法

express.**OnWindow**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 说明


当其他过程切换到该窗口时，或者，当通过 DDE 通道接收到某个要切换到该窗口的命令时，该属性指定的过程不运行，而该过程会响应用户的操作，例如，用鼠标单击某个窗口。

如果一个工作表或宏表具有为它定义的 Auto\_Activate 或 Auto\_Deactivate 宏，这些宏将会在 **[OnWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/OnWindow)** 属性指定的过程之后运行。



## 示例


```JavaScript
/*本示例显示激活窗口时运行的过程的名称。*/
function test() {
    alert(`运行的过程的名称：${Application.OnWindow}`)
}
```


```JavaScript
/*本示例设置激活窗口时运行的过程的名称，并显示。*/
function test() {
    Application.OnWindow = "example"
    alert(Application.OnWindow)
}
```
