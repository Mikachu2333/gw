# PageSetup.RightFooterPicture

返回一个 **Graphic** 对象，该对象代表页脚右边的图片，用于设置图片的属性。



## 语法

express.**RightFooterPicture**

express   一个代表 **PageSetup** 对象的变量。

## 类型

Graphic

## 说明


 **RightFooterPicture** 属性为只读，但并非其所有属性都为只读。

要求 "&G" 为 **RightFooter** 属性字符串的组成部分，以便在右边的页脚中显示图像。



## 示例


```JavaScript
/*本示例将 C:\Pictures\Sample.jpg 添加到活动工作表右页脚部分(“Sample.jpg”文件位于 C:\Pictures文件夹中。)*/
function test() {
    let picture = Application.ActiveSheet.PageSetup.RightFooterPicture
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

    // Enable the image to show up in the right footer.
    Application.ActiveSheet.PageSetup.RightFooter = "&G"
}
```


```JavaScript
/*本示例将 C:\Pictures\Sample.jpg 添加到第一张工作表右页脚部分(“Sample.jpg”文件位于 C:\Pictures文件夹中。)*/
function test() {
    let picture = Application.Worksheets.Item(1).PageSetup.RightFooterPicture
    picture.Filename = "C:\\Pictures\\Sample.jpg"
    picture.Height = 66
    picture.Width = 180
    picture.Brightness = 0.42
    Application.Worksheets.Item(1).PageSetup.RightFooter = "&G"
}
```
