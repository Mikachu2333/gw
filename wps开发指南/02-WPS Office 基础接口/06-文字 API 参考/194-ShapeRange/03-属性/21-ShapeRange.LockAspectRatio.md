# ShapeRange.LockAspectRatio

如果在调整指定形状的大小时保留其最初比例，则该属性值为 **msoTrue** ；如果在调整形状大小时可分别改变其高度和宽度，则该属性值为 **msoFalse** 。可读写 **MsoTriState** 类型。



## 语法

express.**LockAspectRatio**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例设置活动文档中第一个和第二个形状在调整大小时保留其最初比例。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 2])
    shapeRange.LockAspectRatio = msoTrue
}
```


```JavaScript
/*本示例显示选中的形状在调整大小时是否保留其最初比例。*/
function test() {
    alert(Selection.ShapeRange.LockAspectRatio == msoTrue)
}
```
