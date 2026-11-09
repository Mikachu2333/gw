# Application.NumLock

此属性返回 Num Lock 键的状态。如果为 **True** ，则数字键盘可用于输入数字；如果为 **False** ，则该键盘用于移动插入点。 **Boolean** 类型，只读。



## 语法

express.**NumLock**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示 Num Lock 键的当前状态。*/
function test() {
    alert(Application.NumLock)
}
```


```JavaScript
/*本示例判断 Num Lock 键的状态，并显示当前数字键盘的作用。*/
function test() {
    if (Application.NumLock) {
        alert("数字键盘用于输入数字")
    } else {
        alert("数字键盘用于移动插入点")
    }
}
```
