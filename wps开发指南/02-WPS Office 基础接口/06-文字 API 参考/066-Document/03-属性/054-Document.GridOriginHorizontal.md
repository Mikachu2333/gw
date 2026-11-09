# Document.GridOriginHorizontal

返回或设置一个 **Single** 类型的值，该值代表不可见网格相对于页面左边的起点位置，当在指定的文档中绘制、移动和调整自选图形或东亚语言字符时将使用该网格。可读写。



## 语法

express.**GridOriginHorizontal**

express   一个代表 **Document** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例设置网格的水平和垂直起点，以及网格线之间的水平和垂直距离，并为当前文档启用“对齐网格”功能。*/
function test() {
    ActiveDocument.GridOriginHorizontal = 80
    ActiveDocument.GridOriginVertical = 90
    ActiveDocument.GridDistanceHorizontal = 9
    ActiveDocument.GridDistanceVertical = 9
    ActiveDocument.SnapToGrid = true
}
```


```JavaScript
/*本示例设置 WPS 未从第一个文档页面的左上角使用字符网格，然后显示第一个文档的不可见网格相对于页面左边的起点位置的距离。*/
function test() {
    Documents.Item(1).GridOriginFromMargin = false
    alert(Documents.Item(1).GridOriginHorizontal)
}
```
