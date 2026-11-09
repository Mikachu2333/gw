# Pane.Close

关闭指定的窗格。



## 语法

express.**Close()**

express   一个代表 **Pane** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例判断如果活动窗口被拆分，则关闭活动窗格。*/
function test() {
    if (ActiveWindow.Panes.Count >= 2) {
        ActiveWindow.ActivePane.Close()
    }
}
```


```JavaScript
/*本示例关闭活动窗口的第二个窗格。*/
function test() {
    ActiveWindow.Panes.Item(2).Close()
}
```
