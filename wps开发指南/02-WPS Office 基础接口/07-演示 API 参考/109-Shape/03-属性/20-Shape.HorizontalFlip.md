# Shape.HorizontalFlip

返回指定的形状是否绕水平轴翻转。只读。



## 语法

express.**HorizontalFlip**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 说明


 **HorizontalFlip** 属性的值可以是下列 **MsoTriState** 常量之一。

| 常量           | 说明            |
| ------------ | ------------- |
| **msoFalse** | 指定的形状不绕水平轴翻转。 |
| **msoTrue**  | 指定的形状绕水平轴翻转。  |



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中所有进行过水平翻转或垂直翻转的形状还原至初始状态。*/
function test() {
    let shapes = ActivePresentation.Slides(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).HorizontalFlip == msoTrue) {
            shapes.Item(i).Flip(msoFlipHorizontal)
        }
        if (shapes.Item(i).VerticalFlip == msoTrue) {
            shapes.Item(i).Flip(msoFlipVertical)
        }
    }
}
```


```JavaScript
/*本示例判断活动演示文稿的第一张幻灯片中第一个形状是否进行过水平翻转，并显示结果。*/
function test() {
    let shapes = ActivePresentation.Slides(1).Shapes
    if (shapes.Item(1).HorizontalFlip == msoTrue) {
        alert("进行过水平翻转")
    } else {
        alert("未进行过水平翻转")
    }
}
```
