# SoftEdgeFormat.Radius

获取或设置形状的柔化边缘效果的大小（以磅为单位）。可读/写



## 语法

express.**Radius**

express   一个代表 **SoftEdgeFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档的第一个图片的柔化边缘效果的辐射长度设置为20磅。*/
function test() {
    ActiveDocument.Shapes.Item(1).SoftEdge.Radius = 20
}
```


```JavaScript
/*本示例显示第一个文档的第二个图片的柔化边缘效果的辐射长度。*/
function test() {
    alert(Documents.Item(1).Shapes.Item(2).SoftEdge.Radius)
}
```
