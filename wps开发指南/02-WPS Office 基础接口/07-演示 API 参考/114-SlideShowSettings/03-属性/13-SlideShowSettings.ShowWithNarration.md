# SlideShowSettings.ShowWithNarration

决定显示指定幻灯片放映时是否有旁白。可读/写。



## 语法

express.**ShowWithNarration**

express   一个代表 **SlideShowSettings** 对象的变量。

## 类型

MsoTriState

## 说明


 **ShowWithNarration** 属性的值可以是下列 **MsoTriState** 常量之一：

| ----- | ------ |
| msoFalse | 显示指定幻灯片放映时没有旁白。 |
| msoTrue | 显示指定幻灯片放映时有旁白。              |



## 示例


```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，关闭动画和旁白。*/
function test() {
    let slideShowSettings = ActivePresentation.SlideShowSettings
    slideShowSettings.ShowWithAnimation = msoFalse
    slideShowSettings.ShowWithNarration = msoFalse
    slideShowSettings.Run()
}
```


```JavaScript
/*本示例显示第一篇演示文稿的幻灯片放映时是否有旁白。*/
function test() {
    let slideShowSettings = Presentations.Item(1).SlideShowSettings
    alert(slideShowSettings.ShowWithNarration == msoTrue)
}
```
