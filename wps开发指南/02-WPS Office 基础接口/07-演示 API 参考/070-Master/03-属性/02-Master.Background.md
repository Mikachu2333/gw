# Master.Background

返回代表幻灯片母版背景的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象。



## 语法

express.**Background**

express   一个代表 **Master** 对象的变量。

## 类型

ShapeRange

## 说明


如果要使用 **Background** 属性设置单张幻灯片的背景而不更改幻灯片母版，则该幻灯片的 **FollowMasterBackground** 属性必须设置为 **msoFalse** 。



## 示例


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版的背景填充的预设渐变类型是否为msoGradientMoss。*/
function test() {
    let master = ActivePresentation.SlideMaster
    alert(master.Background.Fill.PresetGradientType == msoGradientMoss)
}
```


```JavaScript
/*本示例将活动演示文稿中第一张幻灯片的幻灯片母版的背景填充的前景色设置为蓝色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Master.Background.Fill.ForeColor.RGB = RGB(0, 0, 255)
}
```
