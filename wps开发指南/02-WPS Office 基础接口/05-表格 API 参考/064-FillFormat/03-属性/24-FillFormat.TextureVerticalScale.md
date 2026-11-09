# FillFormat.TextureVerticalScale

返回指定填充的纹理垂直缩放比例因子。可读/写 **Single** 类型。



## 语法

express.**TextureVerticalScale**

express   一个代表 **FillFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将第一张工作表中第一个形状填充的纹理垂直缩放比例因子设置为0.5。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.Item(1).Fill
    fillFormat.TextureVerticalScale = 0.5
}
```


```JavaScript
/*本示例显示活动工作表中第二个形状填充的纹理垂直缩放比例因子。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(2).Fill
    alert(fillFormat.TextureVerticalScale)
}
```
