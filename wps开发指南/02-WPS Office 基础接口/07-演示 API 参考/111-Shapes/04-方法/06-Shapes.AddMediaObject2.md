# Shapes.AddMediaObject2

替换已弃用的 Shapes.AddMediaObject 方法（WPP）。添加新的媒体对象。



## 语法

express.**AddMediaObject2(FileName, LinkToFile, SaveWithDocument, Left, Top, Width, Height)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 要添加的文件的名称。 |
| LinkToFile | 可选 | MsoTriState | 指示是否链接到文件。 |
| SaveWithDocument | 可选 | MsoTriState | 指示是否随文档一起保存媒体。 |
| Left | 可选 | number（float 精度） | 从幻灯片的左边缘到媒体对象的左边缘的距离（以磅为单位）。 |
| Top | 可选 | number（float 精度） | 从幻灯片上边缘到媒体对象的上边缘的距离（以磅为单位）。 |
| Width | 可选 | number（float 精度） | 媒体对象的宽度（以磅为单位）。默认值为 -1。 |
| Height | 可选 | number（float 精度） | 媒体对象的高度（以磅为单位）。默认值为 -1。 |

## 返回值

Shape

## 说明


根据新媒体是音频文件还是视频文件以及文件大小，默认值会有所不同。如果 _LinkToFile_ 和 _SaveWithDocument_ 均为 **msoFalse** ，该方法将返回错误。必须至少有一个参数为 **msoTrue** 。请注意，对象模型允许链接和嵌入对象，无法通过用户界面 (UI) 实现这一功能。



## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加名为“test.mp3”的媒体对象。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.AddMediaObject2("E:\\test.mp3", null, null, 5, 5, 100, 100)
}
```


```JavaScript
/*本示例向第一个演示文稿的第一张幻灯片中添加名为“example.avi”的媒体对象，并选中。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let shape = slide.Shapes.AddMediaObject2("E:\\example.avi", msoTrue, msoTrue, 10, 10, 200, 200)
    shape.Select()
}
```
