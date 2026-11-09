# Application.IsObjectValid

如果引用某个对象的指定变量有效，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**IsObjectValid(Object)**

express   一个代表 **Application** 对象的变量。

## 返回值

boolean

## 说明


如果该变量引用的对象已被删除，则 **IsObjectValid** 属性返回 **False** 。



## 示例


```JavaScript
/*本示例向活动文档添加一个形状，并将该形状赋给“shape”变量，然后删除文档中的第一个形状，如果“shape”引用的形状不是文档中的第一个形状（也就是说，“shape”仍是一个有效对象），则将该形状的前景填充色设置为红色。*/
function test() {
    let shape = ActiveDocument.Shapes.AddShape(msoShapeRectangle, 100, 100, 100, 100)
    ActiveDocument.Shapes.Item(1).Delete()
    if (IsObjectValid(shape)) {
        shape.Fill.ForeColor.RGB = RGB(255, 0, 0)
    }
}
```


```JavaScript
/*本示例将第二个文档分配给变量 document，然后关闭第二个文档，并显示变量 document 是否为一个有效的对象。*/
function test() {
    let document = Documents.Item(2)
    document.Close()
    alert(Application.IsObjectValid(document))
}
```
