# ShapeRange.IncrementTop

以指定磅数垂直移动指定形状。



## 语法

express.**IncrementTop(Increment)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定形状对象垂直移动的距离，以磅为单位。正值将形状下移，负值将形状上移。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将第一张工作表中新建的ShapeRange对象设置填充，再向右移 70 磅、向上移 50 磅，然后顺时针旋转 30 度。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1, 2])
    shpRange.Fill.PresetTextured(msoTextureGranite)
    shpRange.IncrementLeft(70)
    shpRange.IncrementTop(-50)
    shpRange.IncrementRotation(30)
}
```


```JavaScript
/*本示例将活动工作表的所有形状向下移 190 磅，然后逆时针旋转 180 度。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.SelectAll()
    Selection.ShapeRange.IncrementTop(190)
    Selection.ShapeRange.IncrementRotation(-180)
}
```
