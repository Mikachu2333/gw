# Window.PointsToScreenPixelsX

将横向度量值由以点（文档坐标）为单位转换为以屏幕像素（屏幕坐标）为单位。返回转变后的度量值（ **Long** 类型）。



## 语法

express.**PointsToScreenPixelsX(Points)**

express   一个代表 **Window** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Points | 必选 | number（int4 精度） | 从文档窗口的左侧开始沿其顶部水平排列的点数。 |

## 返回值

Long

## 示例


```JavaScript
/*本示例确定活动窗口中选定单元格的高度和宽度（单位：像素），并将值返回到变量 lWinWidth 和 lWinHeight 中。*/
function test() {
    let lWinWidth = ActiveWindow.PointsToScreenPixelsX(ActiveWindow.Selection.Width)
    let lWinHeight = ActiveWindow.PointsToScreenPixelsY(ActiveWindow.Selection.Height)
}
```


```JavaScript
/*本示例在活动窗口中将水平度量值从 10 点转换为屏幕像素并显示。*/
function test() {
    alert(`水平度量值从 10 点转换成屏幕像素为 ${ActiveWindow.PointsToScreenPixelsX(10)} 像素`)
}
```
