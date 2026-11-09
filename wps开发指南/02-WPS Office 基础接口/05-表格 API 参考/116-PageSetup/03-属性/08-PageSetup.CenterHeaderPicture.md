# PageSetup.CenterHeaderPicture

返回一个 **Graphic** 对象，该对象表示页眉中间部分的图片。用于设置图片的属性。



## 语法

express.**CenterHeaderPicture**

express   一个代表 **PageSetup** 对象的变量。

## 类型

Graphic

## 说明


 **CenterHeaderPicture** 属性为只读，但并非它的所有属性都为只读。

要求“&G”为 **CenterHeader** 属性字符串的组成部分，以便在中间的页眉中显示图像。



## 示例


```JavaScript
/*本示例将 C:\ 驱动器中Pictures文件夹中名为“Sample.jpg”的图片添加到活动工作表页眉的中间部分(“Sample.jpg”文件位于 C:\ 驱动器上Pictures文件夹中。)*/
function test() {
    let picture = Application.ActiveSheet.PageSetup.CenterHeaderPicture
    picture.Filename = "C:\\Pictures\\Sample.jpg"
    picture.Height = 275.25
    picture.Width = 463.5
    picture.Brightness = 0.36
    picture.ColorType = msoPictureGrayscale
    picture.Contrast = 0.39
    picture.CropBottom = -14.4
    picture.CropLeft = -28.8
    picture.CropRight = -14.4
    picture.CropTop = 21.6

    // Enable the image to show up in the center header.
    Application.ActiveSheet.PageSetup.CenterHeader = "&G"
}
```


```JavaScript
/*本示例将 C:\ 驱动器中Pictures文件夹中名为“Sample.jpg”的图片添加到第一张工作表页眉的中间部分(“Sample.jpg”文件位于 C:\ 驱动器上Pictures文件夹中。)*/
function test() {
    let picture = Application.Worksheets.Item(1).PageSetup.CenterHeaderPicture
    picture.Filename = "C:\\Pictures\\Sample.jpg"
    picture.Height = 122
    picture.Width = 280
    picture.Brightness = 0.66
    Application.Worksheets.Item(1).PageSetup.CenterHeader = "&G"
}
```
