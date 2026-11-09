# FillFormat.Transparency

该属性返回或设置指定填充的透明度，可取 0.0（不透明）至 1.0（透明）之间的数值。 **Single** 类型，可读/写。



## 语法

express.**Transparency**

express   一个代表 **FillFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


此属性的值仅影响均一颜色填充和线条的外观。对图案线条及渐变、图案、图片和纹理填充的外观无效。



## 示例


```JavaScript
/*本例将活动演示文稿第一张幻灯片中第一个形状填充设置为半透明的红色。如果形状原来无填充，以下示例为它添加填充。*/
function test() {
    let fillFormat = ActivePresentation.Slides.Item(1).Shapes.Item(1).Fill
    fillFormat.Visible = msoTrue
    fillFormat.ForeColor.RGB = RGB(255, 0, 0)
    fillFormat.Transparency = 0.5
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状填充的透明度。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Fill.Transparency)
}
```
