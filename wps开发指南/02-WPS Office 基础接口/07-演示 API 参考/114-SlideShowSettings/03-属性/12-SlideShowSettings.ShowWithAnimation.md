# SlideShowSettings.ShowWithAnimation

决定指定的幻灯片放映是否显示已分配动画设置的形状。可读/写。



## 语法

express.**ShowWithAnimation**

express   一个代表 **SlideShowSettings** 对象的变量。

## 类型

MsoTriState

## 说明


ShowWithAnimation 属性的值可以是下列 MsoTriState 常量之一：

| 常量 | 说明 |
| -------- | ------ |
| **msoFalse** | 指定的幻灯片放映显示没有已分配动画设置的形状。 |
| **msoTrue** | 指定的幻灯片放映显示具有已分配动画设置的形状。  |



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
/*本示例显示第一篇演示文稿的幻灯片放映是否展示已分配动画设置的形状。*/
function test() {
    let slideShowSettings = Presentations.Item(1).SlideShowSettings
    alert(slideShowSettings.ShowWithAnimation == msoTrue)
}
```
