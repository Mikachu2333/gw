# Application.SlideShowWindows

返回一个 **[SlideShowWindows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindows/obj)** 集合，该集合代表所有打开的幻灯片放映窗口。只读。



## 语法

express.**SlideShowWindows**

express   一个代表 **Application** 对象的变量。

## 类型

SlideShowWindows

## 示例


```JavaScript
/*本示例在一个窗口中运行幻灯片放映，并设置该幻灯片放映窗口的高度和宽度。*/
function test() {
    Application.Presentations.Item(1).SlideShowSettings.Run()
    let window = Application.SlideShowWindows.Item(1)
    window.Height = 250
    window.Width = 250
}
```


```JavaScript
/*本示例显示幻灯片放映窗口的数量。*/
function test() {
    alert(Application.SlideShowWindows.Count)
}
```
