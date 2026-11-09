# View.RevisionsBalloonShowConnectingLines

如果为 **True** ，则 WPS 显示从文本到修订和批注气球之间的连接线。 **Boolean** 类型，可读写。



## 语法

express.**RevisionsBalloonShowConnectingLines**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例隐藏文档文本和相应的修订或批注气球之间的连接线。*/
function test() {
    ActiveWindow.View.RevisionsBalloonShowConnectingLines = false
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格是否展示从文本到修订或批注气球之间的连接线。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.RevisionsBalloonShowConnectingLines)
}
```
