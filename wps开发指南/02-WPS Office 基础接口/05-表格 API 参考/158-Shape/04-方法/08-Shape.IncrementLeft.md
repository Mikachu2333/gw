# Shape.IncrementLeft

以指定磅数水平移动指定形状。



## 语法

express.**IncrementLeft(Increment)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 以磅为单位指定形状水平移动的距离。正值使形状向右移动，负值使形状向左移动。 |

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
/*本示例将第一张工作表的第一个形状向左移 20 磅，然后逆时针旋转 90 度。*/
function test() {
    let shape = Application.Worksheets.Item(1).Shapes.Item(1)
    shape.IncrementLeft(-20)
    shape.IncrementRotation(-90)
}
```
