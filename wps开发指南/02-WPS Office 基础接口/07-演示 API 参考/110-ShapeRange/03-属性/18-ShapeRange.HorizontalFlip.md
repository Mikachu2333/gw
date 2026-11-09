# ShapeRange.HorizontalFlip

返回指定的形状是否绕水平轴翻转。只读。



## 语法

express.**HorizontalFlip**

express   一个代表 **ShapeRange** 对象的变量。

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
/*本示例将活动演示文稿上第一张幻灯片中每个被水平或垂直翻转的形状还原到原始状态。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    for (let i = 1; i <= slide.Shapes.Count; i++) {
        let shapeRange = slide.Shapes.Range(i)
        if (shapeRange.HorizontalFlip == msoTrue) {
            shapeRange.Flip(msoFlipHorizontal)
        }
        if (shapeRange.VerticalFlip == msoTrue) {
            shapeRange.Flip(msoFlipVertical)
        }
    }
}
```


```JavaScript
/*本示例判断第一篇演示文稿上第二张幻灯片中所有形状是否进行过水平翻转，并通知用户。*/
function test() {
    Presentations.Item(1).Slides.Item(2).Shapes.SelectAll()
    if (ActiveWindow.Selection.ShapeRange.HorizontalFlip == msoTrue) {
        alert("已水平翻转")
    } else {
        alert("未水平翻转")
    }
}
```
