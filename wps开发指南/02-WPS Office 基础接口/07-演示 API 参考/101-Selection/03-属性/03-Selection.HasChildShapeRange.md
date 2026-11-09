# Selection.HasChildShapeRange

如果所选内容包含子形状，则该属性值为 **True** 。只读



## 语法

express.**HasChildShapeRange**

express   一个代表 **Selection** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断活动窗口中所选内容是否包含子形状，如果包含，则设置子形状的前景填充色；如果未包含，则显示一条消息。*/
function test() {
    let selection = ActiveWindow.Selection
    if (selection.HasChildShapeRange) {
        selection.ChildShapeRange.Fill.ForeColor.RGB = RGB(128, 0, 0)
    } else {
        alert("This is not a range of child shapes.")
    }
}
```


```JavaScript
/*本示例显示第一个窗口中所选内容是否包含子形状。*/
function test() {
    let selection = Windows.Item(1).Selection
    alert(selection.HasChildShapeRange)
}
```
