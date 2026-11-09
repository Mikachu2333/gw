# LineFormat.EndArrowheadLength

返回或设置指定线条末尾的箭头的长度。 **MsoArrowheadLength** 类型，可读写。



## 语法

express.**EndArrowheadLength**

express   一个代表 **LineFormat** 对象的变量。

## 类型

MsoArrowheadLength

## 说明


| **MsoArrowheadLength** 可以是下列 **MsoArrowheadLength** 常量之一。 |
| --------------------------------------------------------- |
| **msoArrowheadLengthMixed**                               |
| **msoArrowheadShort**                                     |
| **msoArrowheadLengthMedium**                              |
| **msoArrowheadLong**                                      |



## 示例


```JavaScript
/*本示例向第一张工作表中添加直线。该直线的起点是一个短而窄的椭圆，而该直线的终点则是一个长而宽的三角形。*/
function test() {
    let worksheet = Application.Worksheets.Item(1)
    let line = worksheet.Shapes.AddLine(100, 100, 200, 300).Line
    line.BeginArrowheadLength = msoArrowheadShort
    line.BeginArrowheadStyle = msoArrowheadOval
    line.BeginArrowheadWidth = msoArrowheadNarrow
    line.EndArrowheadLength = msoArrowheadLong
    line.EndArrowheadStyle = msoArrowheadTriangle
    line.EndArrowheadWidth = msoArrowheadWide
}
```


```JavaScript
/*本示例显示活动工作表的第一个形状线条终点的箭头长度是否为短型。*/
function test() {
    let line = ActiveSheet.Shapes.Item(1).Line
    alert(line.EndArrowheadLength == msoArrowheadShort)
}
```
