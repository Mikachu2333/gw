# ThreeDFormat.SetThreeDFormat

返回预设的延伸格式。每个预设的延伸格式都包含一组各种延伸属性的预设值。



## 语法

express.**SetThreeDFormat(PresetThreeDFormat)**

express   一个代表 **ThreeDFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PresetThreeDFormat | 必选 | MsoPresetThreeDFormat | 指定预设的延伸格式，该格式对应于单击 **“绘图”** 工具栏上的 **“3-D”** 按钮时显示的选项（从左向右、从上到下编号）之一。 |

## 返回值

void

## 说明


此方法将 **[PresetThreeDFormat](#TODO)** 属性设置为由 _PresetThreeDFormat_ 参数指定的格式。



## 示例


```JavaScript
/*本示例向第一张工作表中添加椭圆并将其延伸格式设置为 3D 样式 12。*/
function test() {
    let worksheet = Worksheets.Item(1)
    let threeDFormat = worksheet.Shapes.AddShape(msoShapeOval, 30, 30, 50, 25).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.SetThreeDFormat(msoThreeD12)
}
```


```JavaScript
/*本示例将活动工作表中第二个形状的延伸格式设置为 3D 样式 15。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    shape.ThreeD.SetThreeDFormat(msoThreeD15)
}
```
