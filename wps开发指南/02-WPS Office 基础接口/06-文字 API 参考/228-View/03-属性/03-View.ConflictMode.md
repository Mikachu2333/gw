# View.ConflictMode

如果文档处于冲突模式视图中，则该属性值为 **True** 。可读/写。



## 语法

express.**ConflictMode**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使活动文档的活动窗口处于冲突模式视图中。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.ConflictMode = true
}
```


```JavaScript
/*本示例显示第一个窗口中活动窗格是否处于冲突模式视图中。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ConflictMode)
}
```
