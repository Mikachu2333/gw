# ShadowFormat.Transparency

返回或设置指定填充、阴影或线条的透明度，以 0.0（不透明）至 1.0（透明）之间的值的形式返回。可读/写。



## 语法

express.**Transparency**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


此属性的值仅影响均一颜色填充和线条的外观。对图案线条及渐变、图案、图片和纹理填充的外观无效。



## 示例


```JavaScript
/*本例将活动演示文稿第一张幻灯片中第三个形状的阴影设置为半透明的红色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shadowFormat = slide.Shapes.Item(3).Shadow
    shadowFormat.Visible = msoTrue
    shadowFormat.ForeColor.RGB = RGB(255, 0, 0)
    shadowFormat.Transparency = 0.5
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状阴影的透明度。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Shadow.Transparency)
}
```
