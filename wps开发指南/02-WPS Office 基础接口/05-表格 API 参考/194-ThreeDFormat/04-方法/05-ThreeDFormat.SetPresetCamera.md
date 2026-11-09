# ThreeDFormat.SetPresetCamera

为指定的 **ThreeDFormat** 对象设置相机。



## 语法

express.**SetPresetCamera(PresetCamera)**

express   一个代表 **ThreeDFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PresetCamera | 必选 | MsoPresetCamera | 指定预设相机。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将第一张工作表中的第一个形状ThreeDFormat对象的预设相机类型设置成等长底部朝下。*/
function test() {
    let worksheet = Worksheets.Item(1)
    let threeDFormat = worksheet.Shapes.Item(1).ThreeD
    threeDFormat.SetPresetCamera(msoCameraIsometricBottomDown)
}
```


```JavaScript
/*本示例将活动工作表中第三个形状ThreeDFormat对象的预设相机类型设置成等轴左上。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(3)
    shape.ThreeD.Visible = msoTrue
    shape.ThreeD.SetPresetCamera(msoCameraIsometricLeftUp)
}
```
