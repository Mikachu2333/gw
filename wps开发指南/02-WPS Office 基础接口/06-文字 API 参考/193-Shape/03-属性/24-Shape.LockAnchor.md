# Shape.LockAnchor

如果 **Shape** 对象的锁定标记锁定到锁定范围，则该属性值为 **True** 。可读写 **Long** 类型。



## 语法

express.**LockAnchor**

express   一个代表 **Shape** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果形状有一个锁定的标记，则不能通过拖动来移动形状的锁定标记。锁定标记不会随形状移动而移动。虽然 **Shape** 对象已锁定到某一文字范围，但是您可以将该对象放在页面上的任何位置。形状锁定到包含锁定范围的第一段的开始。形状总是与其锁定标记位于同一页。



## 示例


```JavaScript
/*本示例新建一个文档，为其添加一个形状，然后锁定形状的锁定标记。*/
function test() {
    let document = Documents.Add()
    let shape = document.Shapes.AddShape(msoShapeBalloon, 100, 100, 140, 70)
    shape.LockAnchor = true
    ActiveDocument.ActiveWindow.View.ShowObjectAnchors = true
}
```


```JavaScript
/*本示例显示一条消息，报告活动文档中每个形状的锁定状态。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Shapes.Count; i++) {
        alert("Shape " + i + " is locked - " + ActiveDocument.Shapes.Item(i).LockAnchor)
    }
}
```
