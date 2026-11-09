# DocumentWindow.Presentation

返回一个 **Presentation** 对象，该对象代表创建指定文档窗口或幻灯片放映窗口的演示文稿。只读。



## 语法

express.**Presentation**

express   一个代表 **DocumentWindow** 对象的变量。

## 类型

Presentation

## 说明


如果在第一个文档窗口中当前放映的幻灯片来自嵌入的演示文稿，则 Windows(1).View.Slide.Parent 返回该嵌入演示文稿，并且 Windows(1).Presentation 返回在其中创建第一个文档窗口的演示文稿。  
如果在第一个幻灯片放映窗口中当前放映的幻灯片来自嵌入的演示文稿，则 SlideShowWindows(1).View.Slide.Parent 返回该嵌入演示文稿，并且 SlideShowWindows(1).Presentation 返回在其中创建第一个幻灯片放映窗口的演示文稿。



## 示例


```JavaScript
/*以下示例使第一个窗口的演示文稿幻灯片编号延续到第二个窗口中。*/
function test() {
    let firstPresSlides = Application.Windows.Item(1).Presentation.Slides.Count
    Application.Windows.Item(2).Presentation.PageSetup.FirstSlideNumber = firstPresSlides + 1
}
```


```JavaScript
/*本示例显示第一文档窗口幻灯片数量。*/
function test() {
    alert(Windows.Item(1).Presentation.Slides.Count)
}
```
