# ShapeRange.LockAnchor

如果指定 **ShapeRange** 对象的锁定标记锁定到锁定范围，则该属性值为 **msoTrue** 。可读写 **Long** 类型。



## 语法

express.**LockAnchor**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果形状范围有一个锁定的标记，则不能通过拖动来移动形状的锁定标记。锁定标记不会随形状移动而移动。

虽然 **ShapeRange** 对象已锁定到某一文字范围，但是您可以将该对象放在页面上的任何位置。如果形状范围锁定到包含锁定范围的第一段的开头，则形状总是与其锁定标记位于同一页上。



## 示例


```JavaScript
/*本示例设置活动文档上包含第一个和第二个形状的形状范围的锁定标记锁定到锁定范围。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 2])
    shapeRange.LockAnchor = msoTrue
}
```


```JavaScript
/*本示例显示选中的形状范围的锁定标记是否锁定到锁定范围。*/
function test() {
    alert(Selection.ShapeRange.LockAnchor == msoTrue)
}
```
