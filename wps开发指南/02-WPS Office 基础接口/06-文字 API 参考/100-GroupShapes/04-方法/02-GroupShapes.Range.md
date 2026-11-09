# GroupShapes.Range

返回一个 **ShapeRange** 对象。



## 语法

express.**Range(Index)**

express   一个代表 **GroupShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 指定要在指定区域内包含哪些形状。可以是指定 **Shapes** 集合内某个形状的索引号的整数，也可以是指定形状名称的字符串，或者是包含整数或字符串的数组。 |

## 返回值

ShapeRange

## 说明


 **ShapeRange** 对象不包含 **InlineShape** 对象。一个 **InlineShape** 对象相当于一个字符，并像字符一样位于文本区域中。 **Shape** 对象定位到文本区域（默认情况下为所选内容），但对象可以位于页面上的任何位置。 **Shape** 对象总是与定位的区域位于同一页上。

对 **Shape** 对象进行的大部分操作也适用于只包含一个形状的 **ShapeRange** 对象。有些操作如果用于包含多个形状的 **ShapeRange** 对象，则会产生错误。



## 示例


```JavaScript
/*本示例将活动文档上第一个形状组中第一个形状的填充前景色设置为紫色。*/
function test() {
    let groupShapes = ActiveDocument.Shapes.Item(1).GroupItems
    let fill = groupShapes.Range(1).Fill
    fill.ForeColor.RGB = RGB(255, 0, 255)
    fill.Visible = msoTrue
}
```


```JavaScript
/*本示例为活动文档上第一个形状组中第一个形状应用阴影。*/
function test() {
    ActiveDocument.Shapes.Item(1).GroupItems.Range(1).Shadow.Type = msoShadow6
}
```


```JavaScript
/*本示例设置活动文档上第一个形状组中第一个形状的名称。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Item(1).GroupItems.Range(1)
    shapeRange.Name = "myShape"
}
```


```JavaScript
/*本示例选中活动文档上第一个形状组中第一个形状。*/
function test() {
    ActiveDocument.Shapes.Item(1).GroupItems.Range(1).Select()
}
```


```JavaScript
/*本示例选中活动文档上第一个形状组中第一个形状，然后删除该形状。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Item(1).GroupItems.Range(1)
    shapeRange.Select()
    shapeRange.Delete()
}
```
