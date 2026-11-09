# Application.ActivePresentation

返回一个 **[Presentation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/obj)** 对象，该对象代表当前窗口中打开的演示文稿。只读。



## 语法

express.**ActivePresentation**

express   一个代表 **Application** 对象的变量。

## 类型

Presentation

## 说明


请注意，如果嵌入的演示文稿处于活动状态，则 **ActivePresentation** 属性将返回嵌入的演示文稿。



## 示例


```JavaScript
/*本示例将加载的演示文稿保存到应用程序文件夹下名为“TestFile.pptx”的文件中。*/
function test() {
    let path = Application.Path + "\\TestFile.pptx"
    Application.ActivePresentation.SaveAs(path)
}
```


```JavaScript
/*本示例显示活动演示文稿的第三张幻灯片标题文本。*/
function test() {
    alert(Application.ActivePresentation.Slides(3).Shapes.Title.TextFrame.TextRange.Text)
}
```
