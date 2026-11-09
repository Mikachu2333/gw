# View.Panning

返回或设置 **Boolean** 类型的值，该值表示 WPS 是否处于平移模式。可读写。



## 语法

express.**Panning**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 说明


平移模式将鼠标指针变为手形，使用户能够通过按住鼠标来拖动文档，从而滚动查看文档页。



## 示例


```JavaScript
/*本示例显示第一个窗口的活动窗格是否处于平移模式。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.Panning)
}
```


```JavaScript
/*本示例设置活动文档上活动窗口处于平移模式。*/
function test() {
    ActiveDocument.ActiveWindow.View.Panning = true
}
```
