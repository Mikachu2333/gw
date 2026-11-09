# GradientStops.Item

获取 **GradientStop** 集合中的 **GradientStops** 对象。只读。



## 语法

express.**Item(Index)**

express   一个代表 **GradientStops** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 返回的对象的索引号。 |

## 返回值

GradientStop

## 示例


```JavaScript
/*本示例运行于表格组件，设置活动工作表的第一个形状渐变填充的第一个渐变光圈的颜色。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(1).Fill
    fillFormat.GradientStops.Item(1).Color.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例运行于表格组件，设置第一个工作表的第二个形状渐变填充的第一个渐变光圈的位置的值。*/
function test() {
    let fillFormat = Worksheets.Item(1).Shapes.Item(2).Fill
    let gradientStop = fillFormat.GradientStops.Item(1)
    gradientStop.Position = 0.8
}
```
