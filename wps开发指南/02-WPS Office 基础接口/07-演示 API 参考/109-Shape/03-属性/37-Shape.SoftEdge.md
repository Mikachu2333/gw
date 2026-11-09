# Shape.SoftEdge

返回指定形状的柔化边缘格式。只读。



## 语法

express.**SoftEdge**

express   一个代表 **Shape** 对象的变量。

## 类型

SoftEdgeFormat

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个形状的软边缘效果的辐射长度。*/
function test() {
    alert(ActivePresentation.Slides.Item(1).Shapes.Item(1).SoftEdge.Radius)
}
```


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第二个形状软边缘的类型。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(2).SoftEdge.Type = msoSoftEdgeType3
}
```
