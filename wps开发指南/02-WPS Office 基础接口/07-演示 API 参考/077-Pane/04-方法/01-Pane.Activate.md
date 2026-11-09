# Pane.Activate

激活指定的对象。



## 语法

express.**Activate()**

express   一个代表 **Pane** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例激活第二个窗口的第一个窗格。*/
function test() {
    Windows.Item(2).Panes.Item(1).Activate()
}
```


```JavaScript
/*本示例判断如果活动窗口的活动窗格的视图类型为ppViewSlide，则激活第三个窗格。*/
function test() {
    if (ActiveWindow.ActivePane.ViewType == ppViewSlide) {
        ActiveWindow.Panes.Item(3).Activate()
    }
}
```
