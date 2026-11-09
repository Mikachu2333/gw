# ShapeRange.ScaleWidth

根据指定的系数缩放形状宽度。



## 语法

express.**ScaleWidth(Factor, RelativeToOriginalSize, fScale)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Factor | 必选 | number（float 精度） | 指定形状调整后的宽度与当前或原始宽度的比例。例如，若要将一个矩形放大百分之五十，请将此参数指定为 1.5。 |
| RelativeToOriginalSize | 必选 | MsoTriState | 指定是否相对于形状的当前或原始尺寸来缩放形状。 |
| fScale | 可选 | MsoScaleFrom | 在缩放形状时，形状中位置不变的部分。 |

## 返回值

void

## 说明


对于图片和 OLE 对象来说，可指明形状缩放相对于其原始尺寸还是当前尺寸。图片和 OLE 对象以外的形状总是相对于当前宽度缩放。

 **RelativeToOriginalSize** 参数值可以是下列 **MsoTriState** 常量之一。仅当指定的形状是图片或 OLE 对象，您可以指定该参数的属性值为 **msoTrue** 。

| 常量           | 说明                                |
| ------------ | --------------------------------- |
| **msoFalse** | 相对于当前尺寸缩放形状。|
| **msoTrue**  | 相对于原始尺寸缩放形状。|

 **fScale** 参数值可以是下列 **MsoScaleFrom** 常量之一。 默认值为 **msoScaleFromTopLeft** 。

| 常量                         |
| --------------------------- |
| **msoScaleFromBottomRight** |
| **msoScaleFromMiddle**      |
| **msoScaleFromTopLeft**     |



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片上第一个和第二个形状的宽度放大为当前尺寸的 1.5 倍，形状的中点保持在原有的位置。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range([1, 2])
    shapeRange.ScaleWidth(1.5, msoFalse, msoScaleFromMiddle)
}
```


```JavaScript
/*本示例将活动窗口上选中图片的宽度缩小为原始尺寸的 0.5 倍，图片的右下角保持在原有的位置。*/
function test() {
    let shapeRange = ActiveWindow.Selection.ShapeRange
    shapeRange.ScaleWidth(0.5, msoTrue, msoScaleFromBottomRight)
}
```
