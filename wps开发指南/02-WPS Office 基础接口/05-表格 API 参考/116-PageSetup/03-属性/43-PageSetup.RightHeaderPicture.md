# PageSetup.RightHeaderPicture

返回一个 **Graphic** 对象，该对象代表页眉右边的图片，用于设置图片的属性。



## 语法

express.**RightHeaderPicture**

express   一个代表 **PageSetup** 对象的变量。

## 类型

Graphic

## 说明


 **RightHeaderPicture** 属性为只读，但并非其所有属性都为只读。

要求 "&G" 为 **RightHeader** 属性字符串的组成部分，以便在右边的页眉中显示图像。



## 示例


```JavaScript
/*本示例将 C:\Pictures\Sample.jpg 添加到活动工作表右页眉部分(“Sample.jpg”文件位于 C:\Pictures文件夹中。)*/
function test() {
    let picture = ActiveSheet.PageSetup.RightHeaderPicture
    picture.Filename = "C:\\Pictures\\Sample.jpg"
    picture.Height = 222
    picture.Width = 343
    picture.Brightness = 0.56
    picture.ColorType = msoPictureGrayscale
    picture.Contrast = 0.44
    picture.CropBottom = -18
    picture.CropLeft = -20
    picture.CropRight = -18
    picture.CropTop = 28

    // Enable the image to show up in the right header.
    ActiveSheet.PageSetup.RightHeader = "&G"
}
```


```JavaScript
/*本示例将 C:\Pictures\Sample.jpg 添加到第一张工作表右页眉部分(“Sample.jpg”文件位于 C:\Pictures文件夹中。)*/
function test() {
    let picture = Application.Worksheets.Item(1).PageSetup.RightHeaderPicture
    picture.Filename = "C:\\Pictures\\Sample.jpg"
    picture.Height = 66
    picture.Width = 180
    picture.Brightness = 0.42
    Application.Worksheets.Item(1).PageSetup.RightHeader = "&G"
}
```
