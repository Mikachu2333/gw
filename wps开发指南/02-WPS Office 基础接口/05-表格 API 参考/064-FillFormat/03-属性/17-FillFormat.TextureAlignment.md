# FillFormat.TextureAlignment

返回或设置用于平铺纹理填充的对齐方式（坐标网格的原点）。可读/写。



## 语法

express.**TextureAlignment**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoTextureAlignment

## 示例


```JavaScript
/*本示例将第一张工作表中第一个形状平铺纹理填充的对齐方式设置为左对齐。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.Item(1).Fill
    fillFormat.TextureAlignment = msoTextureLeft
}
```


```JavaScript
/*本示例显示活动工作表中第二个形状平铺纹理填充的对齐方式是否为从上到左对齐。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(2).Fill
    alert(fillFormat.TextureAlignment == msoTextureTopLeft)
}
```
