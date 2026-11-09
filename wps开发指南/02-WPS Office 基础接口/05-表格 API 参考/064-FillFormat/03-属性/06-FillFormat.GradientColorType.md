# FillFormat.GradientColorType

返回指定填充的渐变颜色类型。 **MsoGradientColorType** ，只读。



## 语法

express.**GradientColorType**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoGradientColorType

## 说明


 **MsoGradientColorMixed** 是一个返回值，它仅指明指定区域中其他状态的组合。使用 **OneColorGradient** 、 **PresetGradient** 或 **TwoColorGradient** 方法可设置填充的渐变类型。



## 示例


```JavaScript
/*此示例判断第一张工作表第一个形状填充的渐变类型。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.Item(1).Fill
    if (fillFormat.GradientColorType == msoGradientColorMixed) {
        alert("混合渐变")
    } else {
        alert("其它渐变")
    }
}
```


```JavaScript
/*本示例显示活动工作表中第二个形状填充的渐变类型是否为单色渐变。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(2).Fill
    alert(fillFormat.GradientColorType == msoGradientOneColor)
}
```
