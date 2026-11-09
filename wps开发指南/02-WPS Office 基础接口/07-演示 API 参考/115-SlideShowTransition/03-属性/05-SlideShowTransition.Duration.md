# SlideShowTransition.Duration

返回或设置以秒为单位的动画长度。可读/写。



## 语法

express.**Duration**

express   一个代表 **SlideShowTransition** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例设置第一篇演示文稿上第一张幻灯片切换幻灯片时动画的持续时间。*/
function test() {
    Presentations.Item(1).Slides.Item(1).SlideShowTransition.Duration = 5
}
```


```JavaScript
/*本示例显示活动演示文稿上第一张幻灯片切换幻灯片时动画的持续时间。*/
function test() {
    let slideShowTransition = ActivePresentation.Slides.Item(1).SlideShowTransition
    alert(slideShowTransition.Duration)
}
```
