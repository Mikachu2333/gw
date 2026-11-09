# FillFormat.GradientDegree

以浮点数值的方式返回单色阴影填充的渐变程度，数值大小介于 0.0（暗）到 1.0（亮）之间。 **Single** 型，只读。



## 语法

express.**GradientDegree**

express   一个代表 **FillFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


此属性为只读。使用 **OneColorGradient** 方法可设置填充的渐变程度。



## 示例


```JavaScript
/*本示例显示第一张工作表中第一个形状单色阴影填充的渐变程度。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.Item(1).Fill
    alert(fillFormat.GradientDegree)
}
```


```JavaScript
/*本示例将活动工作表中第二个形状单色阴影填充的渐变程度赋值给A1单元格。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(2).Fill
    Range("A1").Value2 = fillFormat.GradientDegree
}
```
