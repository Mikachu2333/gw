# SlideShowSettings.AdvanceMode

返回或设置一个值，该值指示幻灯片放映的切换方式。可读/写。



## 语法

express.**AdvanceMode**

express   一个代表 **SlideShowSettings** 对象的变量。

## 类型

PpSlideShowAdvanceMode

## 说明


 **AdvanceMode** 属性的值可以是下列 **PpSlideShowAdvanceMode** 常量之一：

| 常量 |
| --------------------------------------------------------- |
| **ppSlideShowManualAdvance**                                  |
| **ppSlideShowRehearseNewTimings**                             |
| **ppSlideShowUseSlideTimings**                                |



## 示例


```JavaScript
/*本示例将活动演示文稿中幻灯片放映的切换方式设置为ppSlideShowManualAdvance。*/
function test() {
    ActivePresentation.SlideShowSettings.AdvanceMode = ppSlideShowManualAdvance
}
```


```JavaScript
/*本示例显示第一篇演示文稿中幻灯片放映的切换方式是否为ppSlideShowUseSlideTimings。*/
function test() {
    let slideShowSettings = Presentations.Item(1).SlideShowSettings
    alert(slideShowSettings.AdvanceMode == ppSlideShowUseSlideTimings)
}
```
