# AddIn.Installed

如果安装了此加载宏，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Installed**

express   一个代表 **AddIn** 对象的变量。

## 类型

boolean

## 说明


将此属性设为 **True** 将安装指定加载宏，并调用 Auto\_Add 函数。将此属性设为 **False** 则移去指定加载宏，并调用 Auto\_Remove 函数。



## 示例


```JavaScript
/*本示例显示 ANALYS32 加载宏的安装状态。*/
function test() {
    let addIn = Application.AddIns.Item("ANALYS32")
    if (addIn.Installed) {
        alert("The ANALYS32 add-in is installed")
    } else {
        alert("The ANALYS32 add-in is not installed")
    }
}
```


```JavaScript
/*本示例安装第一个加载宏。*/
function test() {
    Application.AddIns.Item(1).Installed = true
}
```
