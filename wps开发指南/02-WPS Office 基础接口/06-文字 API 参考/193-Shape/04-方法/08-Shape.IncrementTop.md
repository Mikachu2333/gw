# Shape.IncrementTop

以指定磅数垂直移动指定形状。



## 语法

express.**IncrementTop(Increment)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定对象的垂直移动距离，以磅为单位。为正值时将形状下移；为负值时将形状上移。 |

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
/*本示例将活动文档所有矩形下移10磅，其他形状的位置不变*/
function test() {
    let shapes = Application.ActiveDocument.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        let shape = shapes.Item(i)
        if (shape.AutoShapeType == msoShapeRectangle) {
            shape.IncrementTop(10)
        }
    }
}
```
