# Pane.View

返回一个 **View** 对象，该对象代表指定窗格的视图。



## 语法

express.**View**

express   一个代表 **Pane** 对象的变量。

## 类型

View

## 示例


```JavaScript
/*本示例显示与 Windows 集合中的第一个窗口相关联的窗格的所有非打印字符。*/
function test() {
    for (let i = 1; i <= Windows.Item(1).Panes.Count; i++) {
        Windows.Item(1).Panes.Item(i).View.ShowAll = true
    }
}
```


```JavaScript
/*本示例将活动窗格切换为 Web 视图。*/
function test() {
    ActiveWindow.ActivePane.View.Type = wdWebView
}
```
