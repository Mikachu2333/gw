# GradientStops.Insert2

在渐变中添加一个光圈，并指定颜色亮度和透明度。



## 语法

express.**Insert2(RGB, Position, Transparency, Index, Brightness)**

express   一个代表 **GradientStops** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| RGB | 必选 | number（int 精度） | 指定渐变光圈处的颜色。 |
| Position | 必选 | number（float 精度） | 以百分比形式指定渐变内部的光圈的位置。 |
| Transparency | 可选 | number（float 精度） | 指定渐变光圈处颜色的不透明度。 |
| Index | 可选 | number（int 精度） | 渐变光圈的索引号。 |
| Brightness | 可选 | number（float 精度） | 指定渐变光圈处颜色的亮度。 |

## 返回值

void

## 说明


渐变是指从一种颜色状态到另一种颜色状态的平缓过渡。这些部分的端点称为光圈。

该方法与 [Insert](#TODO) 方法的区别在于，它可用于指定渐变光圈处颜色的亮度和透明度。



## 示例


```JavaScript
/*本示例运行于表格组件，为活动工作表的第一个形状添加一个渐变颜色光圈。*/
function test() {
    let gradientStops = ActiveSheet.Shapes.Item(1).Fill.GradientStops
    gradientStops.Insert2(msoThemeAccent4, 0.5, 0.5, 1, 0.7)
}
```


```JavaScript
/*本示例运行于表格组件，为第一张工作表的第二个形状添加两个渐变颜色光圈。*/
function test() {
    let gradientStops = Worksheets.Item(1).Shapes.Item(2).Fill.GradientStops
    gradientStops.Insert2(msoThemeLight1, 0.5, null, 1)
    gradientStops.Insert2(msoThemeLight2, 0.75, null, 2)
}
```
