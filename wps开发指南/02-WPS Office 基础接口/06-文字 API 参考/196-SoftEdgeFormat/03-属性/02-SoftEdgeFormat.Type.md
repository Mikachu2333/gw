# SoftEdgeFormat.Type

获取或设置 **SoftEdgeFormat** 对象的类型。可读/写。
  


## 语法

express.**Type**

express   一个代表 **SoftEdgeFormat** 对象的变量。

## 类型

MsoSoftEdgeType

## 示例


```JavaScript
/*本示例将活动文档的第一个图片的柔化边缘效果的类型设置为柔化边缘类型4。*/
function test() {
    ActiveDocument.Shapes.Item(1).SoftEdge.Type = msoSoftEdgeType4
}
```


```JavaScript
/*本示例显示活动文档的第二张图片的柔化边缘效果类型是否为柔化边缘类型2。*/
function test() {
    alert(ActiveDocument.Shapes.Item(2).SoftEdge.Type == msoSoftEdgeType2)
}
```
