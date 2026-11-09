# LineFormat.Transparency

返回或设置线条的透明度。可读写 **Single** 类型。



## 语法

express.**Transparency**

express   一个代表 **LineFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


此属性的值可以取 0.0（不透明）至 1.0（透明）之间的值。该属性只影响单色线条的外观；而不影响带图案的线条的外观。



## 示例


```JavaScript
/*本示例将活动文档上第一个（线条）形状的前景填充色设置为半透明的红色。*/
function test() {
    let lineFormat = ActiveDocument.Shapes.Item(1).Line
    lineFormat.Visible = msoTrue
    lineFormat.ForeColor.RGB = RGB(255, 0, 0)
    lineFormat.Transparency = 0.5
}
```


```JavaScript
/*本示例显示所选（线条）形状的透明度。*/
function test() {
    let lineFormat = Selection.ShapeRange.Line
    alert(lineFormat.Transparency)
}
```
