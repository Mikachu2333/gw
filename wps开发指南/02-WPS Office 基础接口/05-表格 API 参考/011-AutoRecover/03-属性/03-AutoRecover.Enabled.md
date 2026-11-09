# AutoRecover.Enabled

如果启用对象，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Enabled**

express   一个代表 **AutoRecover** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示是否启用工作簿的自动恢复功能。*/
function test() {
    if (Application.AutoRecover.Enabled) {
        alert("已启用工作簿的自动恢复功能")
    } else {
        alert("未启用工作簿的自动恢复功能")
    }
}
```


```JavaScript
/*本示例启用工作簿的自动恢复功能，并显示是否启用成功。*/
function test() {
    Application.AutoRecover.Enabled = true
    alert(Application.AutoRecover.Enabled)
}
```
