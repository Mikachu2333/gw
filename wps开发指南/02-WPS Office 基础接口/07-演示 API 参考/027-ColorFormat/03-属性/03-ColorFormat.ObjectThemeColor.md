# ColorFormat.ObjectThemeColor

返回或设置指定 **ColorFormat** 对象的主题颜色。可读/写。



## 语法

express.**ObjectThemeColor**

express   一个代表 **ColorFormat** 对象的变量。

## 类型

MsoThemeColorIndex

## 说明


 **ObjectThemeColor** 属性的值可以是其中一个 **[MsoThemeColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoThemeColorIndex)** 常量。



## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个形状的前景填充的主题颜色是否为msoThemeColorLight1。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.Fill.ForeColor.ObjectThemeColor == msoThemeColorLight1)
}
```


```JavaScript
/*本示例将第一篇演示文稿第一张幻灯片中第二个形状阴影格式的前景主题颜色设置为msoThemeColorAccent2。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(2)
    let colorFormat = shape.Shadow.ForeColor
    colorFormat.ObjectThemeColor = msoThemeColorAccent2
}
```
