# Shape.ScaleWidth

按指定的比例缩放形状的宽度。



## 语法

express.**ScaleWidth(Factor, RelativeToOriginalSize, Scale)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Factor | 必选 | number（float 精度） | 指定形状调整后的宽度与当前或原始宽度的比例。例如，要将一个矩形放大百分之五十，请将此参数指定为 1.5。 |
| RelativeToOriginalSize | 必选 | MsoTriState | 如果该参数值为 True，则相对于原始大小缩放形状。如果该参数值为 False，则相对于当前大小缩放形状。仅当指定的形状为图片或 OLE 对象时，才能将此参数指定为 True。 |
| Scale | 可选 | MsoScaleFrom | 在缩放形状时，形状中位置不变的部分。 |

## 返回值

void

## 说明


对于图片和 OLE 对象，您可以说明是相对于原始大小还是相对于当前大小缩放形状。图片和 OLE 对象以外的形状总是相对于当前宽度缩放。



## 示例


```JavaScript
/*本示例将活动文档上的所有图片和 OLE 对象放大至原始高度和宽度的 175%，将所有其他形状放大至当前高度和宽度的 175%。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Shapes.Count; i++) {
        shape = ActiveDocument.Shapes.Item(i)
        switch (shape.Type) {
            case msoEmbeddedOLEObject:
            case msoLinkedOLEObject:
            case msoOLEControlObject:
            case msoLinkedPicture:
            case msoPicture:
                shape.ScaleHeight(1.75, true)
                shape.ScaleWidth(1.75, true)
                break
            default:
                shape.ScaleHeight(1.75, false)
                shape.ScaleWidth(1.75, false)
        }
    }
}
```


```JavaScript
/*本示例将活动文档上第三个形状缩放至当前宽度的 60%，并且缩放形状时，形状的右下角保持在原有的位置*/
function test() {
    ActiveDocument.Shapes.Item(3).ScaleWidth(0.6, false, msoScaleFromBottomRight)
}
```
