# SlideRange.Background

返回代表幻灯片背景的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象。



## 语法

express.**Background**

express   一个代表 **SlideRange** 对象的变量。

## 类型

ShapeRange

## 说明


如果要使用 **Background** 属性设置单张幻灯片的背景而不更改幻灯片母版，则该幻灯片的 **FollowMasterBackground** 属性必须设置为 **msoFalse** 。



## 示例


```JavaScript
/*本示例将活动演示文稿中第一、三张幻灯片的背景设置为预设的渐变填充。*/
function test() {
    let slideRange = ActivePresentation.Slides.Range([1, 3])
    slideRange.FollowMasterBackground = msoFalse
    slideRange.Background.Fill.PresetGradient(msoGradientHorizontal, 1, msoGradientLateSunset)
}
```


```JavaScript
/*本示例显示第一个窗口中所选幻灯片的背景的名称。*/
function test() {
    let slideRange = Windows.Item(1).Selection.SlideRange
    alert(slideRange.Background.Name)
}
```
