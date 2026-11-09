# ShapeRange.Align

对齐指定形状区域中的形状。



## 语法

express.**Align(AlignCmd, RelativeTo)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| AlignCmd | 必选 | MsoAlignCmd | 指定某个指定形状范围中形状的对齐方式。 |
| RelativeTo | 必选 | MsoTriState | 决定形状是否与幻灯片边缘对齐。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动演示文稿上第一张幻灯片中所有形状的左边与该幻灯片内最左边的形状的左边对齐。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Range().Align(msoAlignLefts, msoFalse)
}
```


```JavaScript
/*本示例设置第一篇演示文稿上第二张幻灯片中第二个形状与幻灯片边缘右对齐。*/
function test() {
    let shapeRange = Presentations.Item(1).Slides.Item(2).Shapes.Range(2)
    shapeRange.Align(msoAlignRights, msoTrue)
}
```
