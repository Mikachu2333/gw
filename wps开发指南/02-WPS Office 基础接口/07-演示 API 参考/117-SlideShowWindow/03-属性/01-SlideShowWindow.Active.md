# SlideShowWindow.Active

返回指定的窗格或窗口是否处于激活的状态。只读。



## 语法

express.**Active**

express   一个代表 **SlideShowWindow** 对象的变量。

## 类型

MsoTriState

## 说明


 **Active** 属性的值可以是下列 **MsoTriState** 常量之一：

| **常量** | **说明** |
| ----- | ----- |
| **msoFalse** | 指定的窗格或窗口处于非活动状态。 |
| **msoTrue** | 指定的窗格或窗口处于活动状态。 |



## 示例


```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，然后显示第一个幻灯片放映的窗口是否处于活动状态。*/
function test() {
    ActivePresentation.SlideShowSettings.Run()
    alert(Application.SlideShowWindows.Item(1).Active === msoTrue)
}
```


```JavaScript
/*本示例运行第一篇演示文稿的幻灯片放映，判断如果最后一个幻灯片放映的窗口未处于活动状态，则激活最后一个幻灯片放映的窗口。*/
function test() {
    Presentations.Item(1).SlideShowSettings.Run()
    let slideShowWindow = Application.SlideShowWindows.Item(SlideShowWindows.Count)
    if (slideShowWindow.Active == msoFalse) {
        slideShowWindow.Activate()
    }
}
```
