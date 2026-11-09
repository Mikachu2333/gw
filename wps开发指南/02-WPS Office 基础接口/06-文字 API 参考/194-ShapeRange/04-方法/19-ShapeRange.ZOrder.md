# ShapeRange.ZOrder

将集合中指定的形状区域移动到其他形状的前面或后面（也就是说，更改形状区域在 Z 顺序中的位置）。



## 语法

express.**ZOrder(ZOrderCmd)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ZOrderCmd | 必选 | MsoZOrderCmd | 指定相对于其他形状将指定的形状区域移动到的位置。 |

## 返回值

void

## 说明


使用 **[ZOrderPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/ZOrderPosition)** 属性确定形状区域在 Z 顺序中的当前位置。



## 示例


```JavaScript
/*本示例在活动文档中添加一个椭圆形，并将该椭圆形的 Z 顺序位置设置为浮于文字上方。*/
function test() {
    let shapes = ActiveDocument.Shapes
    let shape = shapes.AddShape(msoShapeOval, 100, 100, 100, 300)
    let shapeRange = shapes.Range(shape.Name)
    shapeRange.ZOrder(msoBringInFrontOfText)
}
```


```JavaScript
/*本示例将选中形状的 Z 顺序位置置于顶层。*/
function test() {
    Selection.ShapeRange.ZOrder(msoBringToFront)
}
```
