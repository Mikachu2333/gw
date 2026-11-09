# ShapeRange.Top

返回或设置一个 **Single** 类型值，该值代表形状范围内最上方形状的上边缘到文档上边缘的距离。可读/写。



## 语法

express.**Top**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片中第一个和第二个形状的上边缘到幻灯片上边缘的距离为 72 磅。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range([1, 2])
    shapeRange.Top = 72
}
```


```JavaScript
/*本示例显示活动窗口上选中形状范围中最上面的形状的上边缘到幻灯片上边缘的距离。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.Top + "磅")
}
```
