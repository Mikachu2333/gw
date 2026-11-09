# Application.TransitionNavigKeys

如果 Lotus 1-2-3 常用键是活动的，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**TransitionNavigKeys**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示“Lotus 1-2-3 常用键”选项的当前状态。*/
function test() {
    let keyState = null
    if (Application.TransitionNavigKeys) {
        keyState = "On"
    } else {
        keyState = "Off"
    } alert(`The Transition Navigation Keys option is ${keyState}`)
}
```


```JavaScript
/*本示例激活“Lotus 1-2-3 常用键”。*/
function test() {
    Application.TransitionNavigKeys = true
}
```
