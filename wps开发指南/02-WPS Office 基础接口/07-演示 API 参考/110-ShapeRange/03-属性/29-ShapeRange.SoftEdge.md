# ShapeRange.SoftEdge

返回指定形状区域的柔化边缘格式。只读。



## 语法

express.**SoftEdge**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

SoftEdgeFormat

## 示例


```JavaScript
/*本示例设置活动演示文稿上第一张幻灯片中第一个和第二个形状的柔化边缘效果的半径大小。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range([1, 2])
    shapeRange.SoftEdge.Radius = 5
}
```


```JavaScript
/*本示例显示活动窗口选中形状的柔化边缘效果的半径大小。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.SoftEdge.Radius)
}
```
