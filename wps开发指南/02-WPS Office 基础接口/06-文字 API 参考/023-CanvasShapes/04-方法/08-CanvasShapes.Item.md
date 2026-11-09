# CanvasShapes.Item

返回集合中的单个 **Shape** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **CanvasShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例显示活动文档上第一个绘图画布中的第一个形状的类型是否为msoAutoShape。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1).CanvasItems.Item(1)
    alert(shape.Type == msoAutoShape)
}
```


```JavaScript
/*本示例设置第一个文档上第一个绘图画布中第二个自选图形的类型和前景填充色。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(1).CanvasItems.Item(2)
    shape.AutoShapeType = msoShape10pointStar
    shape.Fill.ForeColor.RGB = RGB(255, 120, 100)
}
```
