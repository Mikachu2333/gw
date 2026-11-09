# ShapeRange.MergeShapes

合并范围中的所有形状以创建单个新形状。



## 语法

express.**MergeShapes(MergeCmd, PrimaryShape)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| MergeCmd | 必选 | MsoMergeCmd | 要对形状范围执行的合并操作。 |
| PrimaryShape | 可选 | Shape | 生成的形状从中继承其格式的形状。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片中第一个和第二个形状重叠的区域合并为新的封闭形状，消除非重叠区域。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    shapes.Range([1, 2]).MergeShapes(msoMergeIntersect)
}
```


```JavaScript
/*本示例将活动窗口上选中形状合并为新形状，新形状丢弃选中形状的重叠区域，并继承选中的第二个形状的格式。*/
function test() {
    let shapeRange = ActiveWindow.Selection.ShapeRange
    shapeRange.MergeShapes(msoMergeCombine, shapeRange.Item(2))
}
```
