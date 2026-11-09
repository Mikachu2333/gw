# Application.ActivePrinter

返回或设置活动打印机的名称。 **String** 类型，可读写。



## 语法

express.**ActivePrinter**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动打印机的名称。*/
function test() {
    MsgBox("The name of the active printer is " + Application.ActivePrinter)
}
```


```JavaScript
/*本示例更改活动打印机。 端口名称后面的冒号“:”是必需的。*/
function test() {
    //打印机名称格式："[The name of your printer] on [port]:"
    Application.ActivePrinter = "Fax 在 Ne04:"
}
```
