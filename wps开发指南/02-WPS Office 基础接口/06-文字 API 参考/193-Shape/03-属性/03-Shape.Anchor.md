# Shape.Anchor

返回一个 **Range** 对象，该对象代表指定图形或图形区域的锁定范围。只读。



## 语法

express.**Anchor**

express   一个代表 **Shape** 对象的变量。

## 类型

Range

## 说明


所有 **Shape** 对象都锁定于某一个文字区域，但可将其置于锁定标记所在页的任意位置。如果创建图形时指定了锁定范围，则锁定标记位于包含该锁定范围的第一段落的段首。如果没有指定锁定范围，则将自动选择锁定范围，图形参照页面的左边框和上边框进行定位。

图形总是与锁定标记处在同一页上。如果图形的 **LockAnchor** 属性为 **True** ，则不能在页面上拖动锁定标记。



## 示例


```JavaScript
/*本示例选中活动文档第一个图形锁定标记所在的段落。*/
function test() {
    ActiveDocument.Shapes.Item(1).Anchor.Paragraphs.Item(1).Range.Select()
}
```


```JavaScript
/*本示例为第一个文档的第二个形状锁定标记所在的段落设置 2 倍行距。*/
function test() {
    Documents.Item(1).Shapes.Item(2).Anchor.Paragraphs.Item(1).Space2()
}
```
