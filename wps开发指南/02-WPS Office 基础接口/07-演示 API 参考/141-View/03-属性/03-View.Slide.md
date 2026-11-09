# View.Slide

返回或设置一个 **[Slide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/obj)** 对象，该对象代表在指定文档窗口视图中当前显示的幻灯片。可读/写。



## 语法

express.**Slide**

express   一个代表 **View** 对象的变量。

## 类型

Object

## 说明


如果当前显示的幻灯片来源于一个嵌入演示文稿，则可以使用 **Slide** 对象（从 **Slide** 属性返回）的 **[Parent](#TODO)** 属性返回包含该幻灯片的嵌入演示文稿。（ **SlideShowWindow** 对象或 **DocumentWindow** 对象的 **Presentation** 属性返回创建该窗口的演示文稿，而不是该嵌入演示文稿。）



## 示例


```JavaScript
/*本示例在剪贴板中存放第一个窗口当前展示的幻灯片的一个副本。*/
function test() {
    Windows.Item(1).View.Slide.Copy()
}
```


```JavaScript
/*本示例显示活动窗口视图中当前展示的幻灯片的名称。*/
function test() {
    let slide = ActiveWindow.View.Slide
    alert(slide.Name)
}
```
