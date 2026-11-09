# ShadowFormat.Transparency

返回或设置指定填充的透明度，取值范围为 0.0（不透明）到 1.0（清晰）之间。 **Double** 型，可读写。



## 语法

express.**Transparency**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


此属性的值仅影响均一颜色填充和线条的外观。对图案线条及渐变、图案、图片和纹理填充的外观无效。



## 示例


```JavaScript
/*此示例将第一张工作表上的第三个形状的阴影效果设置为半透明的红色。如果形状没有阴影，此示例将加上阴影效果。*/
function test() {
    let shadow = Application.Worksheets.Item(1).Shapes.Item(3).Shadow
    shadow.Visible = true
    shadow.ForeColor.RGB = RGB(255, 0, 0)
    shadow.Transparency = 0.5
}
```


```JavaScript
/*本示例显示活动工作表中第二个形状阴影的透明度。*/
function test() {
    let shadow = ActiveSheet.Shapes.Item(2).Shadow
    alert(shadow.Transparency)
}
```
