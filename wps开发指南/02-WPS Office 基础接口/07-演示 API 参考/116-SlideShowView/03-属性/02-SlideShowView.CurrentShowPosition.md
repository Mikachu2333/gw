# SlideShowView.CurrentShowPosition

返回当前幻灯片在指定视图下显示的幻灯片放映中的位置。只读， **Long** 类型。



## 语法

express.**CurrentShowPosition**

express   一个代表 **SlideShowView** 对象的变量。

## 类型

number（int 精度）

## 说明


如果指定视图包含自定义放映，则 **CurrentShowPosition** 属性会返回当前幻灯片在自定义放映中的位置，而不是在整个演示文稿中的位置。



## 示例


```JavaScript
/*本示例显示当前幻灯片在第一个幻灯片放映窗口中放映的幻灯片放映中的位置。*/
function test() {
    let lastSlideSeen = Application.SlideShowWindows.Item(1).View.CurrentShowPosition
    Console.log(lastSlideSeen)
}
```


```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，并显示当前幻灯片在放映视图中的位置。*/
function test() {
    let slideShowView = ActivePresentation.SlideShowSettings.Run().View
    Console.log(slideShowView.CurrentShowPosition)
}
```
