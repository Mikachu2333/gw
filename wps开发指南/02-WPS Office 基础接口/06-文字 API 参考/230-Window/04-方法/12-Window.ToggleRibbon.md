# Window.ToggleRibbon

显示或隐藏功能区。



## 语法

express.**ToggleRibbon()**

express   一个代表 **Window** 对象的变量。

## 返回值

void

## 说明


如果功能区可见，则 **TobbleRibbon** 方法隐藏功能区。如果功能区隐藏，则 **ToggleRibbon** 方法显示功能区。



## 示例


```JavaScript
/*本示例显示或隐藏活动窗口的功能区。*/
function test() {
    ActiveWindow.ToggleRibbon()
}
```


```JavaScript
/*本示例显示或隐藏第一个窗口的功能区。*/
function test() {
    Windows.Item(1).ToggleRibbon()
}
```
