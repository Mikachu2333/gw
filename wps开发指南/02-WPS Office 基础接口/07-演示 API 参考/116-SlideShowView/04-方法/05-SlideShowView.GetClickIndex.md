# SlideShowView.GetClickIndex

返回启动当前正在幻灯片上播放或者刚刚已经播放完的动画的当前鼠标单击的索引号。



## 语法

express.**GetClickIndex()**

express   一个代表 **SlideShowView** 对象的变量。

## 返回值

Long

## 说明


使用 **[GetClickCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/member/GetClickCount)** 方法可返回为幻灯片定义的鼠标单击次数。

如果幻灯片不包含任何动画或者用户尚未换到某个动画，则 **GetClickIndex** 方法返回 0。如果幻灯片包含自动播放的动画并且该用户移到上一页，则 **GetClickIndex** 方法返回 **msoClickStateBeforeAutomaticAnimcations** 。



## 示例


```JavaScript
/*本示例显示活动演示文稿中正在幻灯片上播放或刚播放完的动画的当前鼠标单击的索引号。*/
function test() {
    console.log(ActivePresentation.SlideShowWindow.View.GetClickIndex())
}
```


```JavaScript
/*本示例判断如果第一篇演示文稿中正在幻灯片上播放或者刚播放完的动画的鼠标单击的索引号大于0，则跳过动画切换到前一张幻灯片。*/
function test() {
    let slideShowView = Presentations.Item(1).SlideShowWindow.View
    if (slideShowView.GetClickIndex() > 0) {
        slideShowView.Previous()
        console.log("已跳过动画切换到前一张幻灯片。")
    }
}
```
