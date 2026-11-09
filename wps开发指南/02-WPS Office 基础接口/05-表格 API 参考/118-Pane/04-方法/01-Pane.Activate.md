# Pane.Activate

激活窗格。



## 语法

express.**Activate()**

express   一个代表 **Pane** 对象的变量。

## 返回值

Boolean

## 示例


```JavaScript
/*本示例将活动窗口的第二个窗格激活为活动窗格。*/
function test() {
    ActiveWindow.Panes.Item(2).Activate()
}
```


```JavaScript
/*本示例激活第一个窗口的第三个窗格为活动窗格。*/
function test() {
    Windows.Item(1).Panes.Item(3).Activate()
}
```
