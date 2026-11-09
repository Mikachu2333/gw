# SlideShowSettings.RangeType

返回或设置运行幻灯片放映的类型。可读/写。



## 语法

express.**RangeType**

express   一个代表 **SlideShowSettings** 对象的变量。

## 类型

PpSlideShowRangeType

## 说明


 **RangeType** 属性的值可以是下列 **PpSlideShowRangeType** 常量之一：

| 常量 |
| ----------------------------------------------------- |
| **ppShowAll**                                             |
| **ppShowNamedSlideShow**                                  |
| **ppShowSlideRange**                                      |



## 示例


```JavaScript
/*本示例运行活动演示文稿中名为“Quick Show”的幻灯片放映。*/
function test() {
    let slideShowSettings = ActivePresentation.SlideShowSettings
    slideShowSettings.RangeType = ppShowNamedSlideShow
    slideShowSettings.SlideShowName = "Quick Show"
    slideShowSettings.Run()
}
```


```JavaScript
/*本示例显示第一篇演示文稿中运行幻灯片放映的类型是否为ppShowNamedSlideShow。*/
function test() {
    let slideShowSettings = Presentations.Item(1).SlideShowSettings
    alert(slideShowSettings.RangeType == ppShowNamedSlideShow)
}
```
