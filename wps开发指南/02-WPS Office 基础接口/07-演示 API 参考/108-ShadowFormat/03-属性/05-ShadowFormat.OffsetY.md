# ShadowFormat.OffsetY

返回或设置阴影相对指定形状的垂直偏移量（以磅为单位）。可读/写。



## 语法

express.**OffsetY**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


正偏移值将阴影向形状下方偏移；负偏移值将阴影向上方偏移。

使用 **[IncrementOffsetX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/member/IncrementOffsetX)** 方法或 **[IncrementOffsetY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/member/IncrementOffsetY)** 方法可将阴影从当前位置水平或垂直略微移动，而无需指定其绝对位置。



## 示例


```JavaScript
/*本示例为活动演示文稿第一张幻灯片上第三个形状的阴影设置水平和垂直偏移。阴影相对形状向右偏移 5 磅，向上偏移 3 磅。如果形状原来无阴影，以下示例为它添加阴影。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shadowFormat = slide.Shapes.Item(3).Shadow
    shadowFormat.Visible = msoTrue
    shadowFormat.OffsetX = 5
    shadowFormat.OffsetY = -3
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一个形状阴影相对该形状的垂直偏移量。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Shadow.OffsetY + " 磅")
}
```
