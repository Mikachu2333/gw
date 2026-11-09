# View.ShowComments

如果为 **True** ，则 WPS 在文档中显示批注。 **Boolean** 类型，可读写。



## 语法

express.**ShowComments**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 说明


如果修订标记显示在右边距或左边距的气球中，则批注也显示在气球中。如果修订标记显示在文本中，则应用批注的文本被括在方括号中。当将鼠标指针置于括号中的文本时，相关的批注就会显示在鼠标指针上方的方形气球中。



## 示例


```JavaScript
/*本示例隐藏活动文档中的所有批注。本示例假定活动窗口中的文档包括一个或多个批注。*/
function test() {
    ActiveWindow.View.ShowComments = false
}
```


```JavaScript
/*本示例显示是否展示第一个窗口的活动窗格中所有批注。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowComments)
}
```
