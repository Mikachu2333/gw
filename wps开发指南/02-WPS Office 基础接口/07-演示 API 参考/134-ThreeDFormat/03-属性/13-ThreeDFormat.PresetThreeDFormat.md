# ThreeDFormat.PresetThreeDFormat

返回预设的延伸格式。只读。



## 语法

express.**PresetThreeDFormat**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoPresetThreeDFormat

## 说明


此属性为只读。若要设置预设延伸格式，请使用 **[SetThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/SetThreeDFormat)** 方法。

每种预设延伸格式都包含各种延伸属性的一组预设值。此属性的值对应于单击 **“形状效果”** 菜单上的 **“三维旋转”** 子菜单时所显示的选项（从左向右、从上向下编号）。

 **PresetThreeDFormat** 属性的值可以是下列 **MsoPresetThreeDFormat** 常量之一。如果该值为 **msoPresetThreeDFormatMixed** ，则延伸将具有自定义格式而不是预设格式。

| 常量 |
| ------------------------------ |
| **msoPresetThreeDFormatMixed** |
| **msoThreeD1**                 |
| **msoThreeD2**                 |
| **msoThreeD3**                 |
| **msoThreeD4**                 |
| **msoThreeD5**                 |
| **msoThreeD6**                 |
| **msoThreeD7**                 |
| **msoThreeD8**                 |
| **msoThreeD9**                 |
| **msoThreeD10**                |
| **msoThreeD11**                |
| **msoThreeD12**                |
| **msoThreeD13**                |
| **msoThreeD14**                |
| **msoThreeD15**                |
| **msoThreeD16**                |
| **msoThreeD17**                |
| **msoThreeD18**                |
| **msoThreeD19**                |
| **msoThreeD20**                |



## 示例


```JavaScript
/*本示例判断活动演示文稿的第一张幻灯片中第一个形状的延伸格式如果为三维样式 6，则将该形状的延伸格式设置为三维样式 12。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let threeDFormat = slide.Shapes.Item(1).ThreeD
    if (threeDFormat.PresetThreeDFormat == msoThreeD6) {
        threeDFormat.SetThreeDFormat(msoThreeD12)
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一张幻灯片中第一个形状的延伸格式是否为msoThreeD3。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.ThreeD.PresetThreeDFormat == msoThreeD3)
}
```
