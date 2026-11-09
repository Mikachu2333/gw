# View.ShowFormat

如果在大纲视图中显示字符格式，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowFormat**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 说明


如果不是大纲或主控文档视图，该属性将产生一个错误。



## 示例


```JavaScript
/*本示例将活动窗口切换到大纲视图，并显示字符格式。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdOutlineView
    view.ShowFormat = true
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格的大纲视图中是否展示字符格式。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowFormat)
}
```
