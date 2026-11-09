# SlideShowTransition.AdvanceOnClick

决定在幻灯片放映期间单击指定的幻灯片后是否会切换。可读/写。



## 语法

express.**AdvanceOnClick**

express   一个代表 **SlideShowTransition** 对象的变量。

## 类型

MsoTriState

## 说明


要设置幻灯片在某段时间后自动切换，请将 **[AdvanceOnTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/member/AdvanceOnTime)** 属性设置为 **msoTrue** ，并将 **[AdvanceTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/member/AdvanceTime)** 属性设置为希望幻灯片放映的时间。如果同时将 **AdvanceOnClick** 和 **AdvanceOnTime** 属性设置为 **msoTrue** ，则幻灯片将在被单击时或经过指定的时间后（无论哪个先发生）进行切换。

 **AdvanceOnClick** 属性的值可以是其中一个 **MsoTriState** 常量：

| 常量 | 说明 |
| ---- | ---- |
| msoFalse | 在幻灯片放映过程中，单击指定的幻灯片后不进行切换。 |
| msoTrue | 在幻灯片放映过程中，单击指定的幻灯片后进行切换。 |



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
/*本示例判断活动演示文稿第一张幻灯片在放映期间单击幻灯片后是否会切换，并通知用户。*/
function test() {
    let slideShowTransition = ActivePresentation.Slides.Item(1).SlideShowTransition
    if (slideShowTransition.AdvanceOnClick == msoTrue) {
        alert("在放映过程中，单击幻灯片后进行切换。")
    } else {
        alert("在放映过程中，单击幻灯片后不进行切换。")
    }
}
```
