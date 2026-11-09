# SlideShowSettings.Application

返回一个 **Application** 对象，该对象表示指定对象的创建者。




## 语法

express.**Application**

express   一个代表 **SlideShowSettings** 对象的变量。

## 类型

Application

## 示例
以下示例中，一个 **Presentation** 对象被传递至某过程。此过程在演示文稿中添加一张幻灯片，然后将该演示文稿保存在运行 WPP 的文件夹中。



```JavaScript
function AddAndSave(pptPres) {
    pptPres.Slides.Add(1, 1)
    pptPres.SaveAs(pptPres.Application.Path + "\\Added Slide")
}
```
以下示例显示在当前演示文稿的第一张幻灯片上创建每个链接的 OLE 对象的应用程序的名称。



```JavaScript
function test(){
        let shpOle = ActivePresentation.Slides.Item(1).Shapes
       for(let i = 1; i <= shpOle.Count; i++) {
            if(shpOle.Item(i).Type == msoLinkedOLEObject) {
	        MsgBox(shpOle.Item(i).OLEFormat.Application.Name)
            }
        }
}
```
