# Shape.LockAspectRatio

确定在调整指定形状的大小时该形状是否保持其原始比例。可读/写。



## 语法

express.**LockAspectRatio**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 说明


 **LockAspectRatio** 属性的值可以是下列 **MsoTriState** 常量之一。

| 常量           | 说明                    |
| ------------ | --------------------- |
| **msoFalse** | 调整大小时可以分别更改形状的高度和宽度。  |
| **msoTrue**  | 指定的形状在调整大小时其原始比例保持不变。 |



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片上添加一个立方体。可以移动此立方体并调整其大小，但不能重新设置其比例。*/
function test() {
    let slide = ActivePresentation.Slides(1)
    slide.Shapes.AddShape(msoShapeCube, 50, 50, 100, 200).LockAspectRatio = msoTrue
}
```


```JavaScript
/*本示例向活动演示文稿第一张幻灯片上添加一个矩形，并显示在调整该形状的大小时该形状是否保持其原始比例。*/
function test() {
    let shapes = ActivePresentation.Slides(1).Shapes
    let shape = shapes.AddShape(msoShapeRectangle, 100, 100, 100, 100)
    alert(shape.LockAspectRatio == msoTrue)
}
```
