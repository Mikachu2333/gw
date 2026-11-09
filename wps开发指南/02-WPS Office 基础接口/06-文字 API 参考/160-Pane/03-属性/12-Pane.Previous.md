# Pane.Previous

返回一个 **Pane** 对象，该对象代表集合中的上一个文档窗格。只读。



## 语法

express.**Previous**

express   一个代表 **Pane** 对象的变量。

## 类型

Pane

## 示例


```JavaScript
/*本示例激活上一个窗格。*/
function test() {
    if (ActiveWindow.Panes.Count > 1) {
        ActiveWindow.ActivePane.Previous.Activate()
    }
}
```


```JavaScript
/*本示例显示上一个窗格的对应文档名。*/
function test() {
    if (ActiveWindow.Panes.Count > 1) {
        alert(ActiveWindow.ActivePane.Previous.Document.Name)
    }
}
```
