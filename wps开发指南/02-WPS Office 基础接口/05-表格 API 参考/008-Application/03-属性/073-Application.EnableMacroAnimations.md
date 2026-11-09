# Application.EnableMacroAnimations

控制是否启用宏动画。如果启用了用户界面动画或图表动画，则为 **True** 。设置为 **False** (默认情况下没有动画) 。如果在运行宏期间将其设置为 **True** ，它将启用动画，然后在宏运行后重置为 **False** 。读/写 **Boolean** 。



## 语法

express.**EnableMacroAnimations**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例禁用动画。*/
function test() {
    Application.EnableMacroAnimations = false
}
```


```JavaScript
/*此示例判断如果未启用宏动画，则将EnableMacroAnimations属性的值设置为true，并通知用户。*/
function test() {
    if (!Application.EnableMacroAnimations) {
        Application.EnableMacroAnimations = true
        alert("已启用宏动画。")
    }
}
```
