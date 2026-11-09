# FillFormat.GradientStops

返回渐变填充的终点。只读。



## 语法

express.**GradientStops**

express   一个代表 **FillFormat** 对象的变量。

## 类型

GradientStops

## 示例


```JavaScript
/*本示例将活动工作表中第一个形状设置成具有双色渐变填充效果。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(1).Fill
    fillFormat.TwoColorGradient(msoGradientHorizontal, 1)
    fillFormat.GradientStops.Insert2(RGB(255, 0, 0), 0.5, 0, 1)
}
```


```JavaScript
/*本示例显示第一张工作表中第二个形状 GradientStops 集合中的项数。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.Item(2).Fill
    alert(fillFormat.GradientStops.Count)
}
```
