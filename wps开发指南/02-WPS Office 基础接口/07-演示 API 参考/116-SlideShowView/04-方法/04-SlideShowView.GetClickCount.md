# SlideShowView.GetClickCount

返回为幻灯片定义的鼠标单击次数。



## 语法

express.**GetClickCount()**

express   一个代表 **SlideShowView** 对象的变量。

## 返回值

Long

## 说明


如果幻灯片包含动画，则 **GetClickCount** 方法返回用户换到下一张幻灯片之前所需的鼠标单击次数。



## 示例


```JavaScript
/*本示例在立即窗口显示活动演示文稿当前放映的幻灯片转到下一张幻灯片之前所需的鼠标单击次数。*/
function test() {
    console.log(ActivePresentation.SlideShowWindow.View.GetClickCount())
}
```


```JavaScript
/*本示例判断第一篇演示文稿的放映视图换到下一张幻灯片之前所需的鼠标单击次数大于0，则跳过动画切换到下一幻灯片。*/
function test() {
    let slideShowView = Presentations.Item(1).SlideShowWindow.View
    if (slideShowView.GetClickCount() > 0) {
        slideShowView.Next()
        console.log("已跳过动画切换到下一幻灯片。")
    }
}
```
