# ShapeRange.LockAspectRatio

确定在调整指定形状的大小时该形状是否保持其原始比例。可读/写。



## 语法

express.**LockAspectRatio**

express   一个代表 **ShapeRange** 对象的变量。

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
/*本示例向活动演示文稿第一张幻灯片中添加一个立方体，并设置该立方体在调整大小时其原始比例保持不变。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.AddShape(msoShapeCube, 50, 50, 100, 200).Select()
    ActiveWindow.Selection.ShapeRange.LockAspectRatio = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选中的形状在调整大小时其原始比例是否保持不变。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.LockAspectRatio == msoTrue)
}
```
