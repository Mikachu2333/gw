# Shape.IncrementRotation

按指定度数改变指定形状绕 z 轴的旋转量。使用 **Rotation** 属性设置形状的绝对旋转量。



## 语法

express.**IncrementRotation(Increment)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 以度为单位指定形状的水平旋转量。正值表示使形状按顺时针方向旋转；负值表示使形状按逆时针方向旋转。 |

## 返回值

void

## 说明


要将三维形状绕 X 轴或 Y 轴旋转，请分别使用 **IncrementRotationX** 方法或 **IncrementRotationY** 方法。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上的第一个形状设置填充，再向右移 70 磅、向上移 50 磅，然后顺时针旋转 30 度角。*/
function test() {
    let shape = Application.ActivePresentation.Slides.Item(1).Shapes(1)
    shape.Fill.PresetTextured(msoTextureGranite)
    shape.IncrementLeft(70)
    shape.IncrementTop(-50)
    shape.IncrementRotation(30)
}
```


```JavaScript
/*本示例将活动演示文稿的第二张幻灯片上的第一个形状逆时针旋转 40 度角。*/
function test() {
    let shape = Application.ActivePresentation.Slides.Item(2).Shapes(1)
    shape.IncrementRotation(-40)
}
```
