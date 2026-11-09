# Presentation.GridDistance

设置或返回一个 **Single** 类型的值，该值代表网格线之间的距离。可读/写。



## 语法

express.**GridDistance**

express   一个代表 **Presentation** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示网格线，然后指定网格线之间的距离并启用对齐网格的设置。*/
function test() {
    Application.DisplayGridLines = msoTrue
    let presentation = Application.ActivePresentation
    presentation.GridDistance = 18
    presentation.SnapToGrid = msoTrue
}
```


```JavaScript
/*本示例显示网格线之间的距离。*/
function test() {
    alert(ActivePresentation.GridDistance + " 磅")
}
```
