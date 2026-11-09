# SlideShowSettings.ShowPresenterView

如果为 **msoTrue** ，则放映时显示演讲者视图，可读写。



## 语法

express.**ShowPresenterView**

express   一个代表 **SlideShowSettings** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例设置活动演示文稿的幻灯片放映时显示演讲者视图。*/
function test() {
    let slideShowSettings = ActivePresentation.SlideShowSettings
    slideShowSettings.ShowPresenterView = msoTrue
}
```


```JavaScript
/*本示例显示第一篇演示文稿的幻灯片放映时是否展示演讲者视图。*/
function test() {
    let slideShowSettings = Presentations.Item(1).SlideShowSettings
    alert(slideShowSettings.ShowPresenterView == msoTrue)
}
```
