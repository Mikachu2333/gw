# ThreeDFormat.ContourColor

返回 **ThreeDFormat** 对象的轮廓线颜色。只读 **ColorFormat** 类型。



## 语法

express.**ContourColor**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*此示例将第一张工作表的第一个形状三维轮廓线颜色设置为红色。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(1)
    shape.ThreeD.ContourColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例显示活动工作表中第二个形状三维轮廓线颜色的亮度。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.ThreeD.ContourColor.Brightness)
}
```
