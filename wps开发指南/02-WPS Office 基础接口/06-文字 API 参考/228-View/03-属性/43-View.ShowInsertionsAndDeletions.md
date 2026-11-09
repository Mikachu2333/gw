# View.ShowInsertionsAndDeletions

如果为 **True** ，则 WPS 显示用“修订”功能在文档中插入和删除的文本。 **Boolean** 类型，可读写。



## 语法

express.**ShowInsertionsAndDeletions**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例隐藏对文档所作的插入和删除修订。本示例假定活动窗口中的文档包含一个或多个审阅者所作的修订。*/
function test() {
    ActiveWindow.View.ShowInsertionsAndDeletions = false
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格是否展示对文档所作的插入和删除修订。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowInsertionsAndDeletions)
}
```
