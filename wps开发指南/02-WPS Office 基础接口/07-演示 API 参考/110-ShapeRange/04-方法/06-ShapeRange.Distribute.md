# ShapeRange.Distribute

在指定的形状范围内均匀分布形状。可以指定是水平还是垂直分布形状，以及是在整个幻灯片中还是在它们原来所在的空间内分布形状。



## 语法

express.**Distribute(DistributeCmd, RelativeTo)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| DistributeCmd | 必选 | MsoDistributeCmd | 指定该范围内的形状是水平分布还是垂直分布。 |
| RelativeTo | 必选 | MsoTriState | 确定形状在幻灯片的整个水平或垂直空间上是否均匀分布。 |

## 返回值

void

## 示例


```JavaScript
/*本示例定义包含活动演示文稿上第一张幻灯片的所有自选形状的形状范围，然后在该范围内水平分布这些形状。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let numShapes = shapes.Count
    if (numShapes > 1) {
        let numAutoShapes = 0
        let autoShpArray = []
        for (let i = 1; i <= numShapes; i++) {
            if (shapes.Item(i).Type == msoAutoShape) {
                autoShpArray[numAutoShapes] = shapes.Item(i).Name
                numAutoShapes++
            }
        }
        if (numAutoShapes > 1) {
            let asRange = shapes.Range(autoShpArray)
            asRange.Distribute(msoDistributeHorizontally, msoFalse)
        }
    }
}
```


```JavaScript
/*本示例将第一篇演示文稿上第二张幻灯片中所有形状在该幻灯片的垂直空间上均匀分布。*/
function test() {
    Presentations.Item(1).Slides.Item(2).Shapes.SelectAll()
    ActiveWindow.Selection.ShapeRange.Distribute(msoDistributeVertically, msoTrue)
}
```
