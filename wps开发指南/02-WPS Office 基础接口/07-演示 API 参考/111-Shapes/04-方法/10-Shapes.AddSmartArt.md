# Shapes.AddSmartArt

将 SmartArt 图表添加到 **Shapes** 对象中。



## 语法

express.**AddSmartArt(Layout, Left, Top, Width, Height)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Layout | 必选 | SmartArtLayout | 要添加的 SmartArt 图表。 |
| Left | 可选 | number（float 精度） | 从幻灯片左边缘到 SmartArt 图表左边缘的距离（以磅为单位）。 |
| Top | 可选 | number（float 精度） | 从幻灯片上边缘到 SmartArt 图表上边缘的距离（以磅为单位）。 |
| Width | 可选 | number（float 精度） | SmartArt 图表的宽度。 |
| Height | 可选 | number（float 精度） | SmartArt 图表的高度。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片中添加 SmartArt 图表。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.AddSmartArt(Application.SmartArtLayouts.Item(1), 50, 50, 100, 200)
}
```


```JavaScript
/*本示例在第一个演示文稿的最后一张幻灯片中添加 SmartArt 图表，并显示其背景样式是否为指定样式组合。*/
function test() {
    let slides = Presentations.Item(1).Slides
    let shape = slides.Item(slides.Count).Shapes.AddSmartArt(Application.SmartArtLayouts.Item(2), 50, 50, 100, 200)
    alert(shape.BackgroundStyle == msoBackgroundStyleMixed)
}
```
