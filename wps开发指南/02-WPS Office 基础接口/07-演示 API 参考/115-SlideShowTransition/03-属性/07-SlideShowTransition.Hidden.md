# SlideShowTransition.Hidden

决定幻灯片放映过程中指定的幻灯片是否隐藏。可读/写， **MsoTriState** 类型。



## 语法

express.**Hidden**

express   一个代表 **SlideShowTransition** 对象的变量。

## 类型

MsoTriState

## 说明


 **Hidden** 属性的值可以是其中一个 **MsoTriState** 常量：

| 常量 | 说明 |
| ---- | ---- |
| msoFalse | 幻灯片放映过程中不隐藏指定幻灯片。 |
| msoTrue | 幻灯片放映过程中隐藏指定幻灯片。 |



## 示例


```JavaScript
/*本示例将活动演示文稿中的第二张幻灯片设置为在放映过程中隐藏。*/
function test() {
    ActivePresentation.Slides.Item(2).SlideShowTransition.Hidden = msoTrue
}
```


```JavaScript
/*本示例判断活动演示文稿第一张幻灯片在放映期间是否隐藏，并通知用户。*/
function test() {
    let slideShowTransition = ActivePresentation.Slides.Item(1).SlideShowTransition
    if (slideShowTransition.Hidden == msoTrue) {
        alert("该幻灯片在放映过程中隐藏。")
    } else {
        alert("该幻灯片在放映过程中不隐藏。")
    }
}
```
