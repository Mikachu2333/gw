# SlideShowWindow.Presentation

返回一个 **[Presentation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/obj)** 对象，该对象代表创建指定文档窗口或幻灯片放映窗口的演示文稿。只读。



## 语法

express.**Presentation**

express   一个代表 **SlideShowWindow** 对象的变量。

## 类型

Presentation

## 说明


如果在第一个文档窗口中当前放映的幻灯片来自嵌入的演示文稿，则 `Windows.Item(1).View.Slide.Parent` 返回该嵌入演示文稿，并且 `Windows.Item(1).Presentation` 返回在其中创建第一个文档窗口的演示文稿。

如果在第一个幻灯片放映窗口中当前放映的幻灯片来自嵌入的演示文稿，则 `SlideShowWindows.Item(1).View.Slide.Parent` 返回该嵌入演示文稿，并且 `SlideShowWindows.Item(1).Presentation` 返回在其中创建第一个幻灯片放映窗口的演示文稿。



## 示例


```JavaScript
/*本示例运行第一篇演示文稿的幻灯片放映，显示第一个幻灯片放映的窗口被创建的演示文稿中第一张幻灯片的幻灯片编号。*/
function test() {
    Presentations.Item(1).SlideShowSettings.Run()
    let presentation = Application.SlideShowWindows.Item(1).Presentation
    alert(presentation.PageSetup.FirstSlideNumber)
}
```


```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，然后显示最后一个幻灯片放映的窗口被创建的演示文稿的名称。*/
function test() {
    ActivePresentation.SlideShowSettings.Run()
    let presentation = Application.SlideShowWindows.Item(SlideShowWindows.Count).Presentation
    alert(presentation.Name)
}
```
