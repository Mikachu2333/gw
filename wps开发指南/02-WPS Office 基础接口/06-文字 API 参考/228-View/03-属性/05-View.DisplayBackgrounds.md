# View.DisplayBackgrounds

返回或设置一个 **Boolean** 类型的值，该值代表在页面视图中显示文档时，是否显示背景色和图像。



## 语法

express.**DisplayBackgrounds**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置活动文档的活动窗口在页面视图中隐藏背景色和图像。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.DisplayBackgrounds = false
}
```


```JavaScript
/*本示例显示第一个窗口上活动窗格在页面视图中是否展示背景色和图像。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.DisplayBackgrounds)
}
```
