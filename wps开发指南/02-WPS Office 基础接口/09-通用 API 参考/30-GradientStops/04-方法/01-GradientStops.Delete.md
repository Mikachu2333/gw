# GradientStops.Delete

删除渐变光圈。



## 语法

express.**Delete(Index)**

express   一个代表 **GradientStops** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | number（int 精度） | 渐变光圈的索引号。 |

## 返回值

void

## 说明


渐变是指从一种颜色状态到另一种颜色状态的平缓过渡。这些部分的端点称为光圈。



## 示例


```JavaScript
/*本示例运行于表格组件，为活动工作表的第一个形状设置前景填充色，并为该形状添加三个渐变颜色光圈，然后删除第一个渐变光圈。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(1).Fill
    fillFormat.ForeColor.RGB = RGB(0, 128, 128)
    let gradientStops = fillFormat.GradientStops
    gradientStops.Insert2(msoThemeAccent1, 0.25, null, 1)
    gradientStops.Insert2(msoThemeLight1, 0.5, null, 2)
    gradientStops.Insert2(msoThemeLight2, 0.75, null, 3)
    gradientStops.Delete(1)
}
```


```JavaScript
/*本示例运行于表格组件，删除第一张工作表的第一个形状渐变填充的渐变光圈，使渐变光圈的数量为1。*/
function test() {
    let gradientStops = Worksheets.Item(1).Shapes.Item(1).Fill.GradientStops
    for (let i = gradientStops.Count; i > 1; i--) {
        gradientStops.Delete(i)
    }
}
```
