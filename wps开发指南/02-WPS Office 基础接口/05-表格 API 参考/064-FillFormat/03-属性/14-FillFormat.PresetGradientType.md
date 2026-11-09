# FillFormat.PresetGradientType

返回指定填充的预设渐变类型。 **MsoPresetGradientType** ，只读。



## 语法

express.**PresetGradientType**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoPresetGradientType

## 说明


使用 **PresetGradient** 方法可设置填充的预设渐变类型。



## 示例


```JavaScript
/*本示例以第一个形状中使用的填充样式对第二个形状的填充格式进行设置。*/
function test() {
    let fillFormat1 = Application.Worksheets.Item(1).Shapes.Item(1).Fill
    if (fillFormat1.Type == msoFillGradient) {
        let fillFormat2 = Application.Worksheets.Item(1).Shapes.Item(2).Fill
        fillFormat2.Visible = true
        fillFormat2.PresetGradient(fillFormat1.GradientStyle, fillFormat1.GradientVariant, fillFormat1.PresetGradientType)
    }
}
```


```JavaScript
/*本示例在活动工作表中添加一个矩形，并显示填充的预设渐变类型是否为混合渐变。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.AddShape(msoShapeRectangle, 0, 0, 40, 80).Fill
    alert(fillFormat.PresetGradientType == msoPresetGradientMixed)
}
```
