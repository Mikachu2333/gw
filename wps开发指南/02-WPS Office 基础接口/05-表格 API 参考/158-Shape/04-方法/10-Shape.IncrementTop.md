# Shape.IncrementTop

以指定磅数垂直移动指定形状。



## 语法

express.**IncrementTop(Increment)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定形状对象垂直移动的距离，以磅为单位。正值将形状下移，负值将形状上移。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动工作表的第二个形状设置填充，再向右移 70 磅、向上移 50 磅，然后顺时针旋转 30 度。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    shape.Fill.PresetTextured(msoTextureGranite)
    shape.IncrementLeft(70)
    shape.IncrementTop(-50)
    shape.IncrementRotation(30)
}
```


```JavaScript
/*本示例将第一张工作表的第一个形状向下移 190 磅，然后逆时针旋转 20 度。*/
function test() {
    let shape = Application.Worksheets.Item(1).Shapes.Item(1)
    shape.IncrementTop(190)
    shape.IncrementRotation(-20)
}
```
