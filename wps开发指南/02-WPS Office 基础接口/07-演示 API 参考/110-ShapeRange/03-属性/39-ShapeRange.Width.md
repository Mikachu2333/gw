# ShapeRange.Width

以磅为单位返回或设置指定对象的宽度。可读/写 **Single** 类型。



## 语法

express.**Width**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例设置活动演示文稿上第一张幻灯片中第一个和第二个形状的宽度。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range([1, 2])
    shapeRange.Width = 80
}
```


```JavaScript
/*本示例显示活动窗口上选中形状的宽度。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.Width)
}
```
