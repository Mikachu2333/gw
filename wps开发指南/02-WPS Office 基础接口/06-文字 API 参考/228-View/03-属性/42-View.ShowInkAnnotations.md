# View.ShowInkAnnotations

返回或设置一个 **Boolean** 类型的值，该值表示显示还是隐藏手写墨迹注释。如果值为 **True** ，则显示墨迹注释。如果值为 **False** ，则隐藏墨迹注释。



## 语法

express.**ShowInkAnnotations**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动文档中的所有手写墨迹注释。*/
function test() {
    ActiveDocument.ActiveWindow.View.ShowInkAnnotations = true
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格是否展示墨迹注释。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowInkAnnotations)
}
```
