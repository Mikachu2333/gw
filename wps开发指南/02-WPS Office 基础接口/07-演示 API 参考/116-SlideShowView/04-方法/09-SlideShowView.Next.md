# SlideShowView.Next

显示紧接当前显示的幻灯片之后的幻灯片。



## 语法

express.**Next()**

express   一个代表 **SlideShowView** 对象的变量。

## 返回值

void

## 说明


如果显示的是最后一张幻灯片，则 **Next** 方法会关闭演讲者模式的幻灯片放映，在展台模式则返回到第一张幻灯片。使用 **[SlideShowWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/obj)** 对象的 **[View](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/member/View)** 属性可返回 **[SlideShowView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/obj)** 对象。



## 示例


```JavaScript
/*本示例显示第一个幻灯片放映窗口中紧随在当前显示的幻灯片之后的下一张幻灯片。*/
function test() {
    Application.SlideShowWindows.Item(1).View.Next()
}
```


```JavaScript
/*本示例判断如果第一篇演示文稿的放映视图处于运行状态，则放映视图将切换到下一张幻灯片。*/
function test() {
    let slideShowView = Presentations.Item(1).SlideShowWindow.View
    if (slideShowView.State == ppSlideShowRunning) {
        slideShowView.Next()
        console.log("已切换到下一张幻灯片。")
    }
}
```
