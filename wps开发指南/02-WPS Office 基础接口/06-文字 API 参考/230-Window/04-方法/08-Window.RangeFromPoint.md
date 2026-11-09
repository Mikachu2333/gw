# Window.RangeFromPoint

返回 **Range** 或 **Shape** 对象，该对象位于由屏幕位置坐标对指定的位置。



## 语法

express.**RangeFromPoint(x, y)**

express   一个代表 **Window** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| x | 必选 | number（int4 精度） | 从屏幕左边缘到该点的水平距离（以像素为单位）。 |
| y | 必选 | number（int4 精度） | 从屏幕顶部边缘到该点的垂直距离（以像素为单位）。 |

## 返回值

Object

## 说明


如果在坐标对指定的位置中没有区域或图形，则该方法返回 **null** 。



## 示例


```JavaScript
/*本示例可实现的功能是：新建一个文档，并在其中添加一个五角星。然后便获取该图形的屏幕位置并计算其中心位置。用这些坐标（本示例使用 RangeFromPoint 方法）来返回一个到该图形的引用并且改变其填充颜色。*/
function test() {
    let document = Documents.Add()
    let shape = document.Shapes.AddShape(msoShape5pointStar, 288, 100, 100, 72)
    let screenPosition = document.ActiveWindow.GetPoint(shape)
    let left = screenPosition.ScreenPixelsLeft
    let top = screenPosition.ScreenPixelsTop
    let width = screenPosition.ScreenPixelsWidth
    let height = screenPosition.ScreenPixelsHeight
    let range = document.ActiveWindow.RangeFromPoint(left + width / 2, top + height / 2)
    range.Fill.ForeColor.RGB = RGB(80, 160, 130)
}
```


```JavaScript
/*本示例获取指定屏幕坐标所在的范围，并在其末尾插入指定文本。*/
function test() {
    let range = ActiveWindow.RangeFromPoint(1000, 500)
    range.InsertAfter("wps")
}
```
