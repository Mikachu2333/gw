# FillFormat.Transparency

返回或设置形状的指定填充的透明度，可以是 0.0（不透明）到 1.0（透明）之间的数值。可读写 **Single** 类型。



## 语法

express.**Transparency**

express   一个代表 **FillFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


此属性的值影响纯色填充的外观，但对图案、渐变、图片或纹理填充的外观没有影响。



## 示例


```JavaScript
/*本示例设置活动文档上第三个形状的填充的前景色和透明度。*/
function test() {
    let fillFormat = ActiveDocument.Shapes.Item(3).Fill
    fillFormat.ForeColor.RGB = RGB(255, 0, 0)
    fillFormat.Transparency = 0.7
}
```


```JavaScript
/*本示例显示第一个文档上第一个内嵌形状填充的透明度。*/
function test() {
    let fillFormat = Documents.Item(1).InlineShapes.Item(1).Fill
    alert(fillFormat.Transparency)
}
```
