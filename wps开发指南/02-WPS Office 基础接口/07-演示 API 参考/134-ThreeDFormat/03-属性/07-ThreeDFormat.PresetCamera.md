# ThreeDFormat.PresetCamera

返回指定的 **ThreeDFormat** 对象所使用的效果照相机类型。只读。



## 语法

express.**PresetCamera**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoPresetCamera

## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片中第一个形状的三维格式效果照相机类型是否为msoCameraLegacyPerspectiveTopRight。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.ThreeD.PresetCamera == msoCameraLegacyPerspectiveTopRight)
}
```


```JavaScript
/*本示例判断第一篇演示文稿的第一张幻灯片上第一个形状的三维格式的效果照相机类型是否为右上透视，并通知用户。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let threeDFormat = slide.Shapes.Item(1).ThreeD
    if (threeDFormat.PresetCamera == msoCameraPerspectiveAboveRightFacing) {
        alert("当前形状三维格式的效果照相机类型是右上透视")
    } else {
        alert("当前形状三维格式的效果照相机类型不是右上透视")
    }
}
```
