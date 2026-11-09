# ShapeRange.IncrementLeft

以指定磅数水平移动指定的形状范围。



## 语法

express.**IncrementLeft(Increment)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 以磅为单位指定形状范围水平移动的距离。 正值表示将形状范围向右移动，负值表示将形状范围向左移动。 |

## 返回值

void

## 示例


```JavaScript
/*本示例设置活动演示文稿上第一张幻灯片中第一个和第二个形状的填充，再向右移 70 磅、向上移 50 磅，然后顺时针旋转 30 度。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range([1, 2])
    shapeRange.Fill.PresetTextured(msoTextureGranite)
    shapeRange.IncrementLeft(70)
    shapeRange.IncrementTop(-50)
    shapeRange.IncrementRotation(30)
}
```


```JavaScript
/*本示例将活动窗口中选定形状水平左移 200 磅。*/
function test() {
    ActiveWindow.Selection.ShapeRange.IncrementLeft(-200)
}
```
