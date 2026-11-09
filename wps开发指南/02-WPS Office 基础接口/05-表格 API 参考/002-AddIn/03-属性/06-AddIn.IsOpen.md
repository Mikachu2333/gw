# AddIn.IsOpen

如果加载项当前打开，则返回 **True** 。只读 **Boolean** 类型



## 语法

express.**IsOpen**

express   一个代表 **AddIn** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示 ANALYS32 加载宏是否处于打开状态。*/
function test() {
    alert(Application.AddIns.Item("ANALYS32").IsOpen)
}
```


```JavaScript
/*本示例判断第一个加载宏是否处于打开状态，并通知用户。*/
function test() {
    if (Application.AddIns.Item(1).IsOpen) {
        alert("加载项当前处于打开状态")
    } else {
        alert("加载项当前处于关闭状态")
    }
}
```
