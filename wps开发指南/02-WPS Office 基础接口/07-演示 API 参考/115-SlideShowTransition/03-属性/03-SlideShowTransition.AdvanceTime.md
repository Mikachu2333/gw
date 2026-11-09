# SlideShowTransition.AdvanceTime

返回或设置以秒为单位的时间长度，该段时间过后，指定的幻灯片将会切换。可读/写。



## 语法

express.**AdvanceTime**

express   一个代表 **SlideShowTransition** 对象的变量。

## 类型

number（float 精度）

## 说明


若要使幻灯片间隔设置放在整个幻灯片放映的效果，请将 **[SlideShowSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/obj)** 对象 **[AdvanceMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowSettings/member/AdvanceMode)** 属性设置为 ppSlideShowUseSlideTimings。



## 示例


```JavaScript
/*本示例设置活动演示文稿中的第一张幻灯片在五秒钟过去后前进，或在单击鼠标时前进（具体取决于哪个事件首先发生）。*/
function test() {
    let slideShowTransition = ActivePresentation.Slides.Item(1).SlideShowTransition
    slideShowTransition.AdvanceOnClick = msoTrue
    slideShowTransition.AdvanceOnTime = msoTrue
    slideShowTransition.AdvanceTime = 5
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片会自动切换的时间。*/
function test() {
    let slideShowTransition = ActivePresentation.Slides.Item(1).SlideShowTransition
    alert(slideShowTransition.AdvanceTime)
}
```
