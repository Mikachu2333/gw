# SlideShowSettings.ShowScrollbar

属性值为 **msoTrue** 时，在以浏览模式放映幻灯片的过程中显示滚动条。可读/写。



## 语法

express.**ShowScrollbar**

express   一个代表 **SlideShowSettings** 对象的变量。

## 类型

MsoTriState

## 说明


在设置 **ShowScrollbar** 属性之前使用 **[ShowType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/ShowType)** 属性。

 **ShowScrollbar** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 |
| ----------------------------------- |
| msoFalse                            |
| msoTrue                             |



## 示例


```JavaScript
/*本示例指定在某个窗口中显示当前演示文稿的幻灯片放映，并且在幻灯片放映时显示用于浏览幻灯片的滚动条。*/
function test() {
    let slideShowSettings = ActivePresentation.SlideShowSettings
    slideShowSettings.ShowType = ppShowTypeWindow
    slideShowSettings.ShowScrollBar = msoTrue
}
```


```JavaScript
/*本示例显示第一篇演示文稿以浏览模式放映幻灯片的过程中是否展示滚动条。*/
function test() {
    let slideShowSettings = Presentations.Item(1).SlideShowSettings
    alert(slideShowSettings.ShowScrollbar == msoTrue)
}
```
