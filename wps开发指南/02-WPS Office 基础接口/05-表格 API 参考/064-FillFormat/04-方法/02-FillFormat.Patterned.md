# FillFormat.Patterned

将指定填充设为一种图案。



## 语法

express.**Patterned(Pattern)**

express   一个代表 **FillFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Pattern | 必选 | MsoPatternType | 图案的类型。 |

## 返回值

void

## 示例


```JavaScript
/*本示例在活动工作表中添加矩形，并将前景色设置为红色，填充图案设置为网格。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.AddShape(msoShapeRectangle, 0, 0, 40, 80).Fill
    fillFormat.ForeColor.RGB = RGB(255, 0, 0)
    fillFormat.Patterned(msoPatternTrellis)
}
```


```JavaScript
/*本示例在第一张工作表中添加椭圆，并将前景色设置为蓝色，填充图案设置为草皮。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.AddShape(msoShapeOval, 100, 100, 200, 100).Fill
    fillFormat.ForeColor.RGB = RGB(0, 0, 255)
    fillFormat.Patterned(msoPatternDivot)
}
```
