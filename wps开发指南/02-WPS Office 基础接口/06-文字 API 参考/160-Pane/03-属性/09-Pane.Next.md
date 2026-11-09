# Pane.Next

返回一个 **Pane** 对象，该对象代表集合中的下一个文档窗格。只读。



## 语法

express.**Next**

express   一个代表 **Pane** 对象的变量。

## 类型

Pane

## 示例


```JavaScript
/*本示例激活下一个窗格。*/
function test() {
    if (ActiveWindow.Panes.Count > 1) {
        ActiveWindow.ActivePane.Next.Activate()
    }
}
```


```JavaScript
/*本示例显示下一个窗格的对应文档名。*/
function test() {
    if (ActiveWindow.Panes.Count > 1) {
        alert(ActiveWindow.ActivePane.Next.Document.Name)
    }
}
```
