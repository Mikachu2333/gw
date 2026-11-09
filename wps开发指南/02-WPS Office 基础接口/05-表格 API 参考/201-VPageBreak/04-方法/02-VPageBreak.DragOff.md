# VPageBreak.DragOff

将一个分页符拖出打印区域。



## 语法

express.**DragOff(Direction, RegionIndex)**

express   一个代表 **VPageBreak** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Direction | 必选 | XlDirection | 分页符拖动方向。 |
| RegionIndex | 必选 | number（int4 精度） | 分页符的打印区域索引（当用户按下鼠标按钮拖动分页符时鼠标指针所在的位置）。如果打印区域是连续的，则只有一个打印区域。如果打印区域不是连续的，则有多个打印区域。 |

## 返回值

void

## 说明


该方法主要用于宏记录器。使用 **Delete** 方法可在 JS 中删除分页符。



## 示例


```JavaScript
/*本示例将活动工作表的第一个垂直分页符拖出第一个打印区域的右边界，以删除该分页符*/
function test() {
    Application.ActiveSheet.VPageBreaks.Item(1).DragOff(xlToRight, 1)
}
```


```JavaScript
/*本示例将工作表Sheet1的第三个垂直分页符拖出第二个打印区域的左边界，以删除该分页符，最后显示垂直分页符总数*/
function test() {
    let sheet1 = Application.Worksheets.Item("Sheet1")
    sheet1.VPageBreaks.Item(3).DragOff(xlLeft, 2)
    alert(`垂直分页符的数量是 ${sheet1.VPageBreaks.Count}`)
}
```
