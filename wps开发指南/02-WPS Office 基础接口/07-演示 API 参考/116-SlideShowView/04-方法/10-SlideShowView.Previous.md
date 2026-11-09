# SlideShowView.Previous

显示紧邻当前显示的幻灯片之前的幻灯片。



## 语法

express.**Previous()**

express   一个代表 **SlideShowView** 对象的变量。

## 返回值

void

## 说明


如果当前以展台幻灯片放映显示第一张幻灯片，使用 **Previous** 方法将在幻灯片放映中切换到最后一张幻灯片；如果当前显示的是演示文稿中的第一张幻灯片，则此方法无效。使用 **[SlideShowWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/obj)** 对象的 **[View](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindow/member/View)** 属性可返回 **[SlideShowView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowView/obj)** 对象。



## 示例


```JavaScript
/*本示例在第一个幻灯片放映窗口中放映紧挨当前显示的幻灯片之前的幻灯片。*/
function test() {
    Application.SlideShowWindows.Item(1).View.Previous()
}
```


```JavaScript
/*本示例判断如果第一篇演示文稿的放映视图处于运行状态，则放映视图将切换到前一张幻灯片。*/
function test() {
    let slideShowView = Presentations.Item(1).SlideShowWindow.View
    if (slideShowView.State == ppSlideShowRunning) {
        slideShowView.Previous()
        console.log("已切换到前一张幻灯片。")
    }
}
```
