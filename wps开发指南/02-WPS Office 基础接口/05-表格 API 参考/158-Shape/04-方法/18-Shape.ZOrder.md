# Shape.ZOrder

将指定的形状移到集合中其他形状的前面或后面（即更改该形状在 z-次序中的位置）。



## 语法

express.**ZOrder(ZOrderCmd)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ZOrderCmd | 必选 | MsoZOrderCmd | 指定根据其他形状将指定的形状移到什么位置。 |

## 返回值

void

## 说明


使用 **[ZOrderPosition](#TODO)** 属性可确定形状在 Z 顺序中的当前位置。



## 示例


```JavaScript
/*此示例首先向活动工作表添加一个椭圆形，并将该形状置于底层。*/
function test() {
    let shape = ActiveSheet.Shapes.AddShape(msoShapeOval, 100, 100, 100, 300)
    shape.ZOrder(msoSendToBack)
}
```


```JavaScript
/*本示例将第一张工作表中第一个形状置于顶层。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(1)
    shape.ZOrder(msoBringToFront)
}
```
