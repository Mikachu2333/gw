# ControlFormat.RemoveAllItems

删除 ET 列表框或组合框中的所有数据项。



## 语法

express.**RemoveAllItems()**

express   一个代表 **ControlFormat** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除一个列表框中的所有数据项。如果 `Shapes.Item(2)` 代表的不是列表框，则本示例将无效。*/
function test() {
    Worksheets.Item(1).Shapes.Item(2).ControlFormat.RemoveAllItems()
}
```


```JavaScript
/*本示例删除活动工作表上第一个形状（组合框）的所有数据项。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(1)
    shape.ControlFormat.RemoveAllItems()
}
```
