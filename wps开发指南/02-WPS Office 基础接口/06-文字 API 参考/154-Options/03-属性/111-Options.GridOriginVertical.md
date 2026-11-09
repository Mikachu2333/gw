# Options.GridOriginVertical

返回或设置不可见网格相对于页面顶边的起点位置，当在新文档中绘制、移动和调整自选图形或东亚语言字符时将使用该网格。 **Single** 类型，可读写。



## 语法

express.**GridOriginVertical**

express   一个代表 **Options** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例实现的功能是：设置网格的水平和垂直起点，以及网格线之间的水平和垂直距离，并为新文档启用“对象与网格对齐”功能。*/
function test() {
    Options.GridOriginHorizontal = InchesToPoints(1)
    Options.GridOriginVertical = InchesToPoints(2)
    Options.GridDistanceHorizontal = InchesToPoints(0.2)
    Options.GridDistanceVertical = InchesToPoints(0.2)
    Options.SnapToGrid = true
    Documents.Add()
}
```


```JavaScript
/*本示例显示不可见网格相对于页面顶部的起点位置。*/
function test() {
    alert(Options.GridOriginVertical)
}
```
