# FillFormat.GradientStyle

返回指定填充的渐变样式。 **MsoGradientStyle** ，只读。



## 语法

express.**GradientStyle**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoGradientStyle

## 示例


```JavaScript
/*本示例显示活动工作表中第一个形状填充的渐变样式是否为混和。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(1).Fill
    alert(fillFormat.GradientStyle == msoGradientMixed)
}
```


```JavaScript
/*本示例判断第一张工作表中第二个形状填充的渐变样式。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(2).Fill
    if (fillFormat.GradientStyle == msoGradientFromCenter) {
        alert("从中心到各个角的渐变")
    } else {
        alert("msoGradientFromCenter之外的其它渐变")
    }
}
```
