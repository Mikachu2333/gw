# SlideShowTransition.AdvanceOnTime

决定指定的幻灯片在经过指定时间后是否自动切换。可读/写。



## 语法

express.**AdvanceOnTime**

express   一个代表 **SlideShowTransition** 对象的变量。

## 类型

MsoTriState

## 说明


使用 **[AdvanceTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/member/AdvanceTime)** 属性可以指定幻灯片自动切换前需等待的秒数。将 **SlideShowSettings** 对象的 **[AdvanceMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/AdvanceMode)** 属性设置为 **ppSlideShowUseSlideTimings** 可使幻灯片的间隔设置对整个幻灯片放映有效。

 **AdvanceOnTime** 属性的值可以是其中一个 **MsoTriState** 常量：

| 常量 | 说明 |
| ---- | ---- |
| msoFalse | 指定的幻灯片在经过指定时间后不进行自动切换。 |
| msoTrue | 指定的幻灯片在经过指定时间后自动切换。 |



## 示例


```JavaScript
/*本示例设置活动演示文稿中的第一张幻灯片在五秒钟过去后前进，或在单击鼠标时前进（具体取决于哪个事件首先发生）。*/
function test() {
    ActivePresentation.Slides.Item(1).SlideShowTransition.AdvanceOnClick = msoTrue
    ActivePresentation.Slides.Item(1).SlideShowTransition.AdvanceOnTime = msoTrue
    ActivePresentation.Slides.Item(1).SlideShowTransition.AdvanceTime = 5
}
```


```JavaScript
/*本示例判断活动演示文稿第一张幻灯片在放映期间经过指定时间后是否会自动切换，并通知用户。*/
function test() {
    let slideShowTransition = ActivePresentation.Slides.Item(1).SlideShowTransition
    if (slideShowTransition.AdvanceOnTime == msoTrue) {
        alert("该幻灯片在经过指定时间后自动切换。")
    } else {
        alert("该幻灯片在经过指定时间后不进行自动切换。")
    }
}
```
