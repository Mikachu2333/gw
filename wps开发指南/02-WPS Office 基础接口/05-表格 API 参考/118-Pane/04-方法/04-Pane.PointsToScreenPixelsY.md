# Pane.PointsToScreenPixelsY

返回屏幕像素的位置。



## 语法

express.**PointsToScreenPixelsY(Points)**

express   一个代表 **Pane** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Points | 必选 | number（int4 精度） | 起始点的位置。 |

## 返回值

Long

## 示例


```JavaScript
/*本示例用活动窗格将单元格 E2 的数值转换为屏幕像素Y坐标，并显示。*/
function test() {
    alert(ActiveWindow.ActivePane.PointsToScreenPixelsY(Range("E2").Value2))
}
```


```JavaScript
/*本示例通过活动窗口中第一个窗格将30转为屏幕上的像素Y坐标，并显示。*/
function test() {
    let pane = Application.ActiveWindow.Panes.Item(1)
    alert(pane.PointsToScreenPixelsY(30))
}
```
