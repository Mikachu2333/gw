# ColorFormat.RGB

返回或设置指定颜色的红-绿-蓝(RGB)值（RGB 值：RGB 函数的返回值；以红、绿、蓝的数值组合来指定颜色，其数值范围是由 0（零）到 255 的整数。） **Long** 类型，可读/写 。



## 语法

express.**RGB**

express   一个代表 **ColorFormat** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将当前演示文稿第一张幻灯片上第一个形状的背景色设置为红色，并显示第一张幻灯片母版主题中的“着色 1”是否为绿色。*/
function test() {
    let colorFormat = ActivePresentation.Slides.Item(1).Shapes.Item(1).Fill.ForeColor
    colorFormat.RGB = RGB(255, 0, 0)
    let design = ActivePresentation.Designs.Item(1)
    let themeColorScheme = design.SlideMaster.Theme.ThemeColorScheme
    alert(themeColorScheme.Colors(msoThemeAccent1).RGB == RGB(0, 255, 0))
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一张幻灯片中第二个形状阴影格式的前景色是否为青色。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(2)
    let colorFormat = shape.Shadow.ForeColor
    alert(colorFormat.RGB == RGB(0, 255, 255))
}
```
