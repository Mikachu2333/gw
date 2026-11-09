# Window.Active

如果指定窗口处于活动状态，则该属性值为 **True** 。只读 **Boolean** 。



## 语法

express.**Active**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*如果 Windows 集合中的第一个窗口当前不处于活动状态，则本示例将激活该窗口。*/
function test() {
    if (!Windows.Item(1).Active) {
        Windows.Item(1).Activate()
    }
}
```


```JavaScript
/*本示例显示当前处于活动状态的窗口标题。*/
function test() {
    let n = Windows.Count
    for (let i = 1; i <= n; i++) {
        if (Windows.Item(i).Active) {
            alert('当前处于活动状态的窗口标题为：' + Windows.Item(i).Caption)
        }
    }
}
```
