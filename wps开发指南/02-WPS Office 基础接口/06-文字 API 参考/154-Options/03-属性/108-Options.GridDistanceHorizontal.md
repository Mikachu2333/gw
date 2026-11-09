# Options.GridDistanceHorizontal

当在新文档中绘制、移动和调整自选图形或东亚语言字符时，返回或设置 WPS 使用的不可见网格线的水平间距。 **Single** 类型，可读写。



## 语法

express.**GridDistanceHorizontal**

express   一个代表 **Options** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例实现的功能是：设置网格线的水平和垂直间距，并为新文档启动“对象与网格对齐”功能。*/
function test() {
    Options.GridDistanceHorizontal = InchesToPoints(0.2)
    Options.GridDistanceVertical = InchesToPoints(0.2)
    Options.SnapToGrid = true
    Documents.Add()
}
```


```JavaScript
/*本示例显示不可见网格线的水平间距。*/
function test() {
    alert(Options.GridDistanceHorizontal)
}
```
