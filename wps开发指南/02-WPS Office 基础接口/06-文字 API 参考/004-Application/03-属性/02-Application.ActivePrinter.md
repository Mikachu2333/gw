# Application.ActivePrinter

返回或设置活动打印机名称。可读/写 **String** 类型。



## 语法

express.**ActivePrinter**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 说明


使用 **ActivePrinter** 属性设置打印机会更改默认打印机。有关详细信息，请参阅设置 ActivePrinter 会更改系统默认打印机。



## 示例


```JavaScript
/*本示例显示当前打印机的名称。*/
function test() {
    alert("The name of the active printer is " + Application.ActivePrinter)
}
```


```JavaScript
/*本示例将 LPT1 端口的本地 HP LaserJet 4 打印机设置为活动打印机。*/
function test() {
    Application.ActivePrinter = "HP LaserJet 4 local on LPT1:"
}
```
