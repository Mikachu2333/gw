# SlideShowSettings.SlideShowName

返回或设置 **SlideShowSettings** 对象的自定义幻灯片放映的名称。可读/写。



## 语法

express.**SlideShowName**

express   一个代表 **SlideShowSettings** 对象的变量。

## 类型

string

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
/*本示例显示第一篇演示文稿中自定义幻灯片放映的名称。*/
function test() {
    let slideShowSettings = Presentations.Item(1).SlideShowSettings
    alert(slideShowSettings.SlideShowName)
}
```
