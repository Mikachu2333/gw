# ShapeRange.Left

返回或设置一个 **Single** 类型值，该值代表从形状范围中最左侧形状的左边缘到幻灯片左边缘的距离（以磅为单位）。可读/写。



## 语法

express.**Left**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片上指定形状范围中最左侧形状的左边缘到幻灯片左边缘的距离。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range([1, 2])
    shapeRange.Left = 500
}
```


```JavaScript
/*本示例显示活动窗口上选中的形状范围中最左侧形状的左边缘到幻灯片左边缘的距离。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.Left)
}
```
