# ShadowFormat.Style

返回或设置阴影样式。可读/写。



## 语法

express.**Style**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

MsoShadowStyle

## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的标题阴影样式设置为msoShadowStyleInnerShadow。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Title
    shape.Shadow.Style = msoShadowStyleInnerShadow
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状阴影样式是否为msoShadowStyleOuterShadow。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Shadow.Style == msoShadowStyleOuterShadow)
}
```
