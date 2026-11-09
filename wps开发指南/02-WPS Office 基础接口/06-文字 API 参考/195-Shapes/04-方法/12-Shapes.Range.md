# Shapes.Range

返回代表范围内的形状的 **ShapeRange** 对象。



## 语法

express.**Range(Index)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 指定要在指定区域内包含哪些形状。可以是指定 **Shapes** 集合内某个形状的索引号的整数，也可以是指定形状名称的字符串，或者是包含整数或字符串的数组。 |

## 返回值

ShapeRange

## 说明


 **Shape** 对象总是与定位的区域位于同一页上。

对 **Shape** 对象进行的大部分操作也适用于只包含一个形状的 **ShapeRange** 对象。有些操作如果用于包含多个形状的 **ShapeRange** 对象，则会产生错误。



## 示例


```JavaScript
/*本示例将活动文档中第一个形状的填充前景色设置为紫色。*/
function test() {
    let fillFormat = ActiveDocument.Shapes.Range(1).Fill
    fillFormat.ForeColor.RGB = RGB(255, 0, 255)
    fillFormat.Visible = msoTrue
}
```


```JavaScript
/*本示例在活动文档中添加形状，并通过setShadow方法为该形状应用阴影。*/
function test() {
    let shape = ActiveDocument.Shapes.AddShape(msoShapeLeftArrow, 200, 400, 50, 75)
    shape.Name = "shapeLeftArrow"
    setShadow(shape.Name)
}

function setShadow(name) {
    let shapeRange = ActiveDocument.Shapes.Range(name)
    shapeRange.Shadow.Type = msoShadow6
}
```


```JavaScript
/*本示例选择活动文档的第一和第三个形状。*/
function test() {
    ActiveDocument.Shapes.Range([1, 3]).Select()
}
```


```JavaScript
/*本示例选择并删除活动文档的第二个形状。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range(2)
    shapeRange.Select()
    shapeRange.Delete()
}
```
