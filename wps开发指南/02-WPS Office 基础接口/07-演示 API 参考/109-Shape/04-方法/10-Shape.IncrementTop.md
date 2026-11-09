# Shape.IncrementTop

以指定点数垂直移动指定形状。



## 语法

express.**IncrementTop(Increment)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 以磅为单位指定形状对象的垂直移动距离。正值表示将形状向下移动，负值表示将形状向上移动。 |

## 返回值

void

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
/*本示例将活动演示文稿的第二张幻灯片上的第一个形状向下移 60 磅。*/
function test() {
    let shape = Application.ActivePresentation.Slides.Item(2).Shapes(1)
    shape.IncrementTop(60)
}
```
