# Shape.ScaleHeight

以指定的比例缩放图形高度。



## 语法

express.**ScaleHeight(Factor, RelativeToOriginalSize, fScale)**

express   一个代表 **Shape** 对象的变量。

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

RelativeToOriginalSize 参数值可以是以下 **MsoTriState** 常量之一。 仅当指定的形状是图片或 OLE 对象，您可以指定此参数的属性值为 **msoTrue** 。

| 常量           | 说明            |
| ------------ | ------------- |
| **msoFalse** | 相对于形状的当前尺寸缩放。 |
| **msoTrue**  | 相对于原始大小缩放该形状。仅当指定形状是图片或 OLE 对象时，才为此参数指定 **msoTrue** 。  |

| fScale 可以是下列 MsoScaleFrom 常量之一。 |
| ------------------------------------- |
| **msoScaleFromBottomRight**           |
| **msoScaleFromMiddle**                |
| **msoScaleFromTopLeft** ：默认值。          |



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片上的所有图片和 OLE 对象放大至原始高度和宽度的 175%，并将所有其他形状放大至当前高度和宽度的 175%。*/
function test() {
    let slide = Application.ActivePresentation.Slides.Item(1)
    let shapes = slide.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        switch (shapes.Item(i).Type) {
            case msoEmbeddedOLEObject:
            case msoLinkedOLEObject:
            case msoOLEControlObject:
            case msoLinkedPicture:
            case msoPicture:
                shapes.Item(i).ScaleHeight(1.75, msoTrue)
                shapes.Item(i).ScaleWidth(1.75, msoTrue)
                break
            default:
                shapes.Item(i).ScaleHeight(1.75, msoFalse)
                shapes.Item(i).ScaleWidth(1.75, msoFalse)
        }
    }
}
```


```JavaScript
/*本示例将活动演示文稿第一张幻灯片上第三个形状缩放至当前高度的 50%，并且缩放形状时，形状的中点保持在原有的位置。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(3).ScaleHeight(0.5, false, msoScaleFromMiddle)
}
```
