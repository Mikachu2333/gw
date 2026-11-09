# DocumentWindows.Application

返回一个Application对象，该对象表示指定对象的创建者




## 语法

express.**Application**

express   一个代表 **DocumentWindows** 对象的变量。

## 类型

Application

## 示例


```JavaScript
/*以下示例中，一个Presentation对象被传递至某过程。此过程在演示文稿中添加一张幻灯片，然后将该演示文稿保存在运行的WPP的文件夹中。*/
function test(){
     let pptPres = Application.ActivePresentation
     pptPres.Slides.Add(1,1)
     pptPres.SaveAs(pptPres.Application.Path + "\\Added Slide")
}
```
