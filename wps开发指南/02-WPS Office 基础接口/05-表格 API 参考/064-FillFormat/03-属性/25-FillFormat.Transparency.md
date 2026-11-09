# FillFormat.Transparency

返回或设置指定填充的透明度，取值范围为 0.0（不透明）到 1.0（清晰）之间。 **Double** 型，可读写。



## 语法

express.**Transparency**

express   一个代表 **FillFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


此属性的值仅影响均一颜色填充和线条的外观。对图案线条及渐变、图案、图片和纹理填充的外观无效。



## 示例


```JavaScript
/*本示例将第一张工作表中第二个形状的填充透明度设置为0.5。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.Item(2).Fill
    fillFormat.Transparency = 0.5
}
```


```JavaScript
/*本示例显示活动工作表中第一个形状的填充的透明度。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(1).Fill
    alert(fillFormat.Transparency)
}
```
