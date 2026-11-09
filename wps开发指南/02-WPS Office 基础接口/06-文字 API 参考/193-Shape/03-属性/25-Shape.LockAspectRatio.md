# Shape.LockAspectRatio

如果在调整指定形状的大小时保留其最初比例，则该属性值为 **msoTrue** ；如果在调整形状大小时可分别改变其高度和宽度，则该属性值为 **msoFalse** 。可读写 **MsoTriState** 类型。



## 语法

express.**LockAspectRatio**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例向活动文档添加一个立方体。可以移动此立方体并调整其大小，但不能重新设置其比例。*/
function test() {
    ActiveDocument.Shapes.AddShape(msoShapeCube, 50, 50, 100, 200).LockAspectRatio = msoTrue
}
```


```JavaScript
/*本示例显示第一个文档中第二个形状调整大小时是否保留其最初比例。*/
function test() {
    alert(Application.Documents.Item(1).Shapes.Item(2).LockAspectRatio == msoTrue)
}
```
