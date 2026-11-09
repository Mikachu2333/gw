# Slide.Master

返回一个 **[Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/obj)** 对象，该对象代表幻灯片母版。只读。



## 语法

express.**Master**

express   一个代表 **Slide** 对象的变量。

## 类型

Master

## 示例


```JavaScript
/*本示例为活动演示文稿中第一张幻灯片的幻灯片母版设置背景填充。*/
function test() {
    let master = ActivePresentation.Slides.Item(1).Master
    master.Background.Fill.PresetGradient(msoGradientDiagonalUp, 1, msoGradientDaybreak)
}
```


```JavaScript
/*本示例显示活动演示文稿中第一张幻灯片的幻灯片母版的高度。*/
function test() {
    alert(ActivePresentation.Slides.Item(1).Master.Height)
}
```
