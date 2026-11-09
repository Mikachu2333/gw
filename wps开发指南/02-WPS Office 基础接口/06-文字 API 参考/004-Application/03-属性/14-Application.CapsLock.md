# Application.CapsLock

如果已打开 Caps Lock 键，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**CapsLock**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示 Caps Lock 键的当前状态。*/
function test() {
    alert(Application.CapsLock)
}
```


```JavaScript
/*本示例判断如果 Caps Lock 键已打开，则通知用户。*/
function test() {
    if (Application.CapsLock) {
        alert("已打开 CAPS LOCK 键")
    }
}
```
