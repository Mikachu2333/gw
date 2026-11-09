# Presentation.SlideShowWindow

返回一个 **[SlideShowWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/obj)** 对象，该对象代表正在运行的指定演示文稿所在的幻灯片放映窗口。只读。



## 语法

express.**SlideShowWindow**

express   一个代表 **Presentation** 对象的变量。

## 类型

SlideShowWindow

## 示例


```JavaScript
/*本示例显示活动演示文稿中幻灯片放映的窗口的高度。*/
function test() {
    alert(Application.ActivePresentation.SlideShowWindow.Height + " 磅")
}
```


```JavaScript
/*本示例判断如果第一篇演示文稿的幻灯片放映视图当前放映状态为 ppSlideShowRunning，则切换到下一张幻灯片。*/
function test() {
    let view = Presentations.Item(1).SlideShowWindow.View
    if (view.State == ppSlideShowRunning) {
        view.Next()
    }
}
```
