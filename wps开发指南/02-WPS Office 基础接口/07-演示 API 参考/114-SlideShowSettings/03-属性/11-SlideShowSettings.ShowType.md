# SlideShowSettings.ShowType

返回或设置指定幻灯片放映的放映类型。可读/写。



## 语法

express.**ShowType**

express   一个代表 **SlideShowSettings** 对象的变量。

## 类型

PpSlideShowType

## 说明


 **ShowType** 属性的值可以是下列 **PpSlideShowType** 常量之一：

| 常量 |
| ------------------------------------------- |
| **ppShowTypeKiosk**                             |
| **ppShowTypeSpeaker**                           |
| **ppShowTypeWindow**                            |
| **ppShowTypeWindow2** |



## 示例


```JavaScript
/*本示例在窗口中运行当前演示文稿的一个幻灯片放映，从第二张幻灯片开始，到第四张幻灯片结束。新的幻灯片放映窗口位于屏幕左上角，宽度和高度均为 300 磅。*/
function test() {
    let slideShowSettings = ActivePresentation.SlideShowSettings
    slideShowSettings.RangeType = ppShowSlideRange
    slideShowSettings.StartingSlide = 2
    slideShowSettings.EndingSlide = 4
    slideShowSettings.ShowType = ppShowTypeWindow
    let slideShowWindow = slideShowSettings.Run()
    slideShowWindow.Left = 0
    slideShowWindow.Top = 0
    slideShowWindow.Width = 300
    slideShowWindow.Height = 300
}
```


```JavaScript
/*本示例显示第一篇演示文稿幻灯片放映的放映类型是否为ppShowTypeSpeaker。*/
function test() {
    let slideShowSettings = Presentations.Item(1).SlideShowSettings
    alert(slideShowSettings.ShowType == ppShowTypeSpeaker)
}
```
