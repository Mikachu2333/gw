# View.ShowFormatChanges

如果为 **True** ，则在启用“修订”功能后，WPS 显示对文档所作的格式更改。 **Boolean** 类型，可读写。



## 语法

express.**ShowFormatChanges**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例隐藏对活动文档所作的格式更改。本示例假定在启用“修订”功能后，以对文档进行了格式更改。*/
function test() {
    ActiveWindow.View.ShowFormatChanges = false
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格是否展示对文档所作的格式更改。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowFormatChanges)
}
```
