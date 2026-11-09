# Window.Panes

返回一个 **Panes** 集合，该集合代表指定窗口中所有的窗格。



## 语法

express.**Panes**

express   一个代表 **Window** 对象的变量。

## 类型

Panes

## 示例


```JavaScript
/*本示例将活动窗口拆分为两个窗格。*/
function test() {
    if (ActiveDocument.ActiveWindow.Panes.Count == 1) {
        ActiveDocument.ActiveWindow.Panes.Add()
    }
}
```


```JavaScript
/*本示例激活第二个窗口中的第一个窗格。*/
function test() {
    Windows.Item(2).Panes.Item(1).Activate()
}
```
