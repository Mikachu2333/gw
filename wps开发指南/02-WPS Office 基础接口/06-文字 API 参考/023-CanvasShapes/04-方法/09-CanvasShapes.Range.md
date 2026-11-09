# CanvasShapes.Range

返回一个 **ShapeRange** 对象。



## 语法

express.**Range(Index)**

express   一个代表 **CanvasShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 指定要在指定区域内包含哪些形状。可以是指定 **Shapes** 集合内某个形状的索引号的整数，也可以是指定形状名称的字符串，或者是包含整数或字符串的数组。 |

## 返回值

ShapeRange

## 说明


字符位置值从文档开头算起，起始值为 0（零）。将计算所有字符，包括非打印字符。隐藏字符即便未显示也计算在内。

 **ShapeRange** 对象不包含 **InlineShape** 对象。一个 **InlineShape** 对象相当于一个字符，并像字符一样位于文本区域中。 **Shape** 对象定位到文本区域（默认情况下为所选内容），但对象可以位于页面上的任何位置。 **Shape** 对象总是与定位的区域位于同一页上。

对 **Shape** 对象进行的大部分操作也适用于只包含一个形状的 **ShapeRange** 对象。有些操作如果用于包含多个形状的 **ShapeRange** 对象，则会产生错误。



## 示例


```JavaScript
/*本示例选择并删除活动文档的第一个绘图画布中的第一个形状。*/
function test() {
    let shapeRange = ActiveDocument.Shapes(1).CanvasItems.Range(1)
    shapeRange.Select()
    shapeRange.Delete()
}
```


```JavaScript
/*本示例设置第一个文档上第一个绘图画布中第一个和第二个形状的前景填充色和边框前景色。*/
function test() {
    let shapeRange = Documents.Item(1).Shapes.Item(1).CanvasItems.Range([1, 2])
    shapeRange.Fill.ForeColor.RGB = RGB(255, 0, 0)
    shapeRange.Line.ForeColor.RGB = RGB(255, 255, 0)
}
```
