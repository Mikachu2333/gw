# Document.GridDistanceVertical

在指定的文档中绘制、移动和调整自选图形或东亚语言字符时，返回或设置代表 WPS 所用的不可见网格线之间的垂直距离的 **Single** 类型。可读写。



## 语法

express.**GridDistanceVertical**

express   一个代表 **Document** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例设置网格线之间的水平和垂直间距，并为当前文档启用“对象与网格对齐”功能。*/
function test() {
    ActiveDocument.GridDistanceHorizontal = 9
    ActiveDocument.GridDistanceVertical = 9
    ActiveDocument.SnapToGrid = true
}
```


```JavaScript
/*本示例显示第一个文档绘制、移动和调整自选图形或东亚语言字符时，WPS 所用的不可见的网格线之间的垂直距离。*/
function test() {
    alert(Documents.Item(1).GridDistanceVertical)
}
```
