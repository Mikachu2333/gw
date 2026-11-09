# Shape.SaveAsPicture

将单个形状另存为图片文件。



## 语法

express.**SaveAsPicture(FileName)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | any | 要创建的新图片文件的路径和文件名。保存图片的图形格式由指定的文件扩展名（如 .jpg 或 .gif）决定。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个形状另存为图片文件。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.SaveAsPicture("D:\\TestFile\\example1.jpg")
}
```


```JavaScript
/*本示例在活动窗口所选的第一张幻灯片中添加一个图表形状，并将该图表形状另存为图片文件。*/
function test() {
    let shapes = ActiveWindow.Selection.SlideRange.Item(1).Shapes
    let shape = shapes.AddChart2(7, xlBarStacked)
    shape.SaveAsPicture("D:\\TestFile\\example_chart.png")
}
```
