# DocumentWindow.PointsToScreenPixelsY

将纵向度量值的单位由磅值转换为像素。可用于返回文本框或形状的纵向屏幕位置。以类型 **Single** 返回转换后的度量值。



## 语法

express.**PointsToScreenPixelsY(Points)**

express   一个代表 **DocumentWindow** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Points | 必选 | number（float 精度） | 要转换为以像素为单位的纵向度量值（以磅为单位）。 |

## 返回值

Single

## 示例


```JavaScript
/*本示例将选取的文本框架边界框的宽度和高度从磅值转换到像素。并将值返回到 myXparm 和 myYparm。*/
function test() {
    let myXparm = Application.ActiveWindow.PointsToScreenPixelsX(Application.ActiveWindow.Selection.TextRange.BoundWidth)
    alert(myXparm)
    let myYparm = Application.ActiveWindow.PointsToScreenPixelsY(Application.ActiveWindow.Selection.TextRange.BoundHeight)
    alert(myYparm)
}
```


```JavaScript
/*本示例将第一个文档窗口高度加400磅后的值转为像素，并显示转换后的值。*/
function test() {
    let pixelsY = Windows.Item(1).PointsToScreenPixelsY(Windows.Item(1).Height + 400)
    alert(pixelsY)
}
```
