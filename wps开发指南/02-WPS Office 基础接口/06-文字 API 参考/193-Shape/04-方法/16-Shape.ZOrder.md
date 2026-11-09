# Shape.ZOrder

将指定的形状移到集合中其他形状的前面或后面（即更改该形状在 Z 顺序中的位置）。



## 语法

express.**ZOrder(ZOrderCmd)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ZOrderCmd | 必选 | MsoZOrderCmd | 指定相对于其他形状将指定形状移动到的位置。 |

## 返回值

void

## 说明


使用 **ZOrderPosition** 属性可确定形状在 Z 顺序中的当前位置。



## 示例


```JavaScript
/*本示例在活动文档中添加一个椭圆形，并将该椭圆形置于 Z 顺序中倒数第二的位置（如果文档中至少还有另一个图形）。*/
function test() {
    let shape = ActiveDocument.Shapes.AddShape(msoShapeOval, 100, 100, 100, 300)
    while (shape.ZOrderPosition > 2) {
        shape.ZOrder(msoSendBackward)
    }
}
```


```JavaScript
/*本示例将第一个文档中第一个形状置于顶层。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(1)
    shape.ZOrder(msoBringToFront)
}
```
