# ThreeDFormat.SetThreeDFormat

设置预设的延伸格式。



## 语法

express.**SetThreeDFormat(PresetThreeDFormat)**

express   一个代表 **ThreeDFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PresetThreeDFormat | 必选 | MsoPresetThreeDFormat | 指定预设的延伸格式，该格式对应于单击 **Shape Effects** 菜单上的 **3-D Rotation** 子菜单时显示的选项之一（按从左至右、从上至下的顺序编号）。 |

## 返回值

void

## 说明


每种预设延伸格式都包含各种延伸属性的一组预设值。

该方法将 **[PresetThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/PresetThreeDFormat)** 属性设置为由 PresetThreeDFormat 参数指定的格式。

PresetThreeDFormat 参数值可以是下列 **MsoPresetThreeDFormat** 常量之一。指定 **msoPresetThreeDFormatMixed** 会导致错误。

| 常量 |
| --------------- |
| **msoThreeD1**  |
| **msoThreeD2**  |
| **msoThreeD3**  |
| **msoThreeD4**  |
| **msoThreeD5**  |
| **msoThreeD6**  |
| **msoThreeD7**  |
| **msoThreeD8**  |
| **msoThreeD9**  |
| **msoThreeD10** |
| **msoThreeD11** |
| **msoThreeD12** |
| **msoThreeD13** |
| **msoThreeD14** |
| **msoThreeD15** |
| **msoThreeD16** |
| **msoThreeD17** |
| **msoThreeD18** |
| **msoThreeD19** |
| **msoThreeD20** |



## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加椭圆并将其延伸格式设置为 3D 样式 12。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let threeDFormat = slide.Shapes.AddShape(msoShapeOval, 30, 30, 50, 25).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.SetThreeDFormat(msoThreeD12)
}
```


```JavaScript
/*本示例将第一篇演示文稿的第一张幻灯片上第一个形状的延伸格式设置为 3D 样式 3，延伸的照明来自顶部。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let threeDFormat = slide.Shapes.Item(1).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.SetThreeDFormat(msoThreeD3)
    threeDFormat.PresetLightingDirection = msoLightingTop
}
```
