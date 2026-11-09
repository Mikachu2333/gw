# View.ShowRevisionsAndComments

如果为 **True** ，则 WPS 显示使用“修订”功能对文档所作的修订和批注。 **Boolean** 类型，可读写。



## 语法

express.**ShowRevisionsAndComments**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例隐藏文档中的修订和备注。本示例假定活动窗口中的文档包括一个或多个审阅者所作的修订。*/
function test() {
    ActiveWindow.View.ShowRevisionsAndComments = false
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格是否展示对文档所作的修订和批注。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowRevisionsAndComments)
}
```
