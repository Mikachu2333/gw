# Pane.Activate

激活指定的窗格。



## 语法

express.**Activate()**

express   一个代表 **Pane** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例拆分活动窗口，然后激活第一个窗格。*/
function test() {
    let window = ActiveDocument.ActiveWindow
    window.SplitVertical = 50
    window.Panes.Item(1).Activate()
}
```


```JavaScript
/*本示例将活动窗口拆分为两个窗格，并激活第二个窗格，再遍历所有窗格，显示每个窗格是否处于激活状态。*/
function test() {
    ActiveWindow.Split = true
    ActiveWindow.Panes.Item(2).Activate()
    for (let i = 1; i <= ActiveWindow.Panes.Count; i++) {
        if (ActiveWindow.Panes.Item(i).Selection.Active) {
            alert(`第${i}个窗格处于激活状态`)
        } else {
            alert(`第${i}个窗格处于非激活状态`)
        }
    }
}
```
