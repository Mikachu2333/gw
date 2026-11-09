# GradientStop.Transparency

获取或设置一个以百分比形式表示的代表渐变填充不透明度的值。可读/写。



## 语法

express.**Transparency**

express   一个代表 **GradientStop** 对象的变量。

## 类型

number（float 精度）

## 说明


渐变是指从一种颜色状态到另一种颜色状态的平缓过渡。这些部分的端点称为光圈。



## 示例


```JavaScript
/*本示例运行于表格组件，显示活动工作表的第一个形状渐变填充的最后一个渐变光圈的不透明度的值。*/
function test() {
    let gradientStops = ActiveSheet.Shapes.Item(1).Fill.GradientStops
    alert(gradientStops.Item(gradientStops.Count).Transparency)
}
```


```JavaScript
/*本示例运行于表格组件，设置第一个工作表的第二个形状渐变填充的第一个渐变光圈的不透明度的值。*/
function test() {
    let fillFormat = Worksheets.Item(1).Shapes.Item(2).Fill
    let gradientStop = fillFormat.GradientStops.Item(1)
    gradientStop.Transparency = 0.7
}
```
