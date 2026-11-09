# Slide.Background

返回代表幻灯片背景的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象。



## 语法

express.**Background**

express   一个代表 **Slide** 对象的变量。

## 类型

ShapeRange

## 说明


如果要使用 **Background** 属性设置单张幻灯片的背景而不更改幻灯片母版，则该幻灯片的 **FollowMasterBackground** 属性必须设置为 **False** 。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的背景设为预设的底纹。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Background.Fill.PresetGradient(msoGradientHorizontal, 1, msoGradientLateSunset)
}
```


```JavaScript
/*本示例将活动演示文稿中第一张幻灯片的背景设为预设的底纹（且不继承幻灯片母版背景）。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.FollowMasterBackground = msoFalse
    slide.Background.Fill.PresetGradient(msoGradientHorizontal, 1, msoGradientLateSunset)
}
```
