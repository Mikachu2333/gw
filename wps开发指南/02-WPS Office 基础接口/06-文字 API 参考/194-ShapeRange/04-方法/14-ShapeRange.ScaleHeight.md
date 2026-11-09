# ShapeRange.ScaleHeight

按指定的比例缩放形状范围的高度。



## 语法

express.**ScaleHeight(Factor, RelativeToOriginalSize, Scale)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Factor | 必选 | number（float 精度） | 指定形状调整后的高度与当前或原始高度的比例。例如，要将一个矩形放大百分之五十，请将此参数指定为 1.5。 |
| RelativeToOriginalSize | 必选 | MsoTriState | 如果该参数值为 **True** ，则相对于原始大小缩放形状。如果该参数值为 **False** ，则相对于当前大小缩放形状。仅当指定的形状为图片或 OLE 对象时，才能将此参数指定为 **True** 。 |
| Scale | 可选 | MsoScaleFrom | 在缩放形状时，形状中位置不变的部分。 |

## 返回值

void

## 说明


对于图片和 OLE 对象，您可以说明是相对于原始大小还是相对于当前大小缩放形状。对于图片和 OLE 对象以外的形状总是相对于当前高度缩放。



## 示例


```JavaScript
/*本示例将活动文档上第一个和第二个形状的高度放大为当前大小的 1.5 倍，形状的中点保持在原有的位置。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 2])
    shapeRange.ScaleHeight(1.5, msoFalse, msoScaleFromMiddle)
}
```


```JavaScript
/*本示例将选中形状的高度缩小为当前大小的 0.5 倍，形状的左上角保持在原有的位置。*/
function test() {
    Selection.ShapeRange.ScaleHeight(0.5, msoFalse, msoScaleFromTopLeft)
}
```
