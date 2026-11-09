# ShapeRange.ScaleHeight

以指定的比例缩放形状范围的高度。



## 语法

express.**ScaleHeight(Factor, RelativeToOriginalSize, fScale)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Factor | 必选 | number（float 精度） | 指定形状调整后的高度与当前或原始高度的比例。例如，若要将一个矩形放大百分之五十，请将此参数指定为 1.5。 |
| RelativeToOriginalSize | 必选 | MsoTriState | 指定是否相对于形状的当前或原始尺寸来缩放形状。 |
| fScale | 可选 | MsoScaleFrom | 在缩放形状时，形状中位置不变的部分。 |

## 返回值

void

## 说明


对于图片和 OLE 对象来说，可指明形状缩放相对于其原始尺寸还是当前尺寸。 对于除图片和 OLE 对象以外的其他形状来说，缩放总是相对于其当前高度而言。

 **RelativeToOriginalSize** 参数值可以是下列 **MsoTriState** 常量之一。仅当指定的形状是图片或 OLE 对象，您可以指定该参数的属性值为 **msoTrue** 。

| 常量           | 说明                                |
| ------------ | --------------------------------- |
| **msoFalse** | 相对于形状的当前尺寸缩放形状。|
| **msoTrue**  | 相对于形状的原始尺寸缩放形状。|

 **fScale** 参数值可以是下列 **MsoScaleFrom** 常量之一。 默认值为 **msoScaleFromTopLeft** 。

| 常量                         |
| --------------------------- |
| **msoScaleFromBottomRight** |
| **msoScaleFromMiddle**      |
| **msoScaleFromTopLeft**     |



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片上第一个和第二个形状的高度放大为当前尺寸的 1.5 倍，形状的中点保持在原有的位置。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range([1, 2])
    shapeRange.ScaleHeight(1.5, msoFalse, msoScaleFromMiddle)
}
```


```JavaScript
/*本示例将活动窗口上选中形状的高度缩小为当前尺寸的 0.5 倍，形状的右下角保持在原有的位置。*/
function test() {
    let shapeRange = ActiveWindow.Selection.ShapeRange
    shapeRange.ScaleHeight(0.5, msoFalse, msoScaleFromBottomRight)
}
```
