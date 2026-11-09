# SlideShowSettings.StartingSlide

返回或设置指定幻灯片放映中要显示的第一张幻灯片。可读/写。



## 语法

express.**StartingSlide**

express   一个代表 **SlideShowSettings** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例运行活动演示文稿的一个幻灯片放映，该放映从第二张幻灯片开始，到第四张幻灯片结束。*/
function test() {
    let slideShowSettings = ActivePresentation.SlideShowSettings
    slideShowSettings.RangeType = ppShowSlideRange
    slideShowSettings.StartingSlide = 2
    slideShowSettings.EndingSlide = 4
    slideShowSettings.Run()
}
```


```JavaScript
/*本示例显示第一篇演示文稿的幻灯片放映中要展示的第一张幻灯片。*/
function test() {
    let slideShowSettings = Presentations.Item(1).SlideShowSettings
    alert(slideShowSettings.StartingSlide)
}
```
