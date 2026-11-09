# FillFormat.TextureHorizontalScale

返回或设置纹理填充的水平缩放比例因子。可读/写 **Single** 类型。



## 语法

express.**TextureHorizontalScale**

express   一个代表 **FillFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将第一张工作表中第一个形状纹理填充的水平缩放比例因子设置为0.4。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.Item(1).Fill
    fillFormat.TextureHorizontalScale = 0.4
}
```


```JavaScript
/*本示例显示活动工作表中第二个形状纹理填充的水平缩放比例因子。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(2).Fill
    alert(fillFormat.TextureHorizontalScale)
}
```
