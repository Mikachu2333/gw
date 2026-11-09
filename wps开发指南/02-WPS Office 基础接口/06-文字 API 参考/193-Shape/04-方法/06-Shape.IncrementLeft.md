# Shape.IncrementLeft

将指定形状水平移动指定的磅数。



## 语法

express.**IncrementLeft(Increment)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定形状水平移动的距离，以磅为单位。为正值时将形状右移；为负值时将形状左移。 |

## 返回值

void

## 示例


```JavaScript
/*本示例复制活动文档上的第一个形状，并设置复制的填充，再向右移 70 磅、向上移 50 磅，然后顺时针旋转 30 度。*/
function test() {
    let originalShape = Application.ActiveDocument.Shapes.Item(1)
    let newShape = originalShape.Duplicate()
    newShape.Fill.PresetTextured(msoTextureGranite)
    newShape.IncrementLeft(70)
    newShape.IncrementTop(-50)
    newShape.IncrementRotation(30)
}
```


```JavaScript
/*本示例用于左对齐所有形状。*/
function test() {
    let shapes = Application.ActiveDocument.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        let shape = shapes.Item(i)
        let currentLeft = shape.Left
        shape.IncrementLeft(50 - currentLeft)
    }
}
```
