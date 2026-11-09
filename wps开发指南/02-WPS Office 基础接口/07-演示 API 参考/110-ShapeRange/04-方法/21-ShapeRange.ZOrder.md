# ShapeRange.ZOrder

将指定的形状移到集合中其他形状的前面或后面（即更改该形状在 z-顺序中的位置）。



## 语法

express.**ZOrder(ZOrderCmd)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ZorderCmd | 必选 | MsoZOrderCmd | 指定针对其他形状将指定形状移动到的位置。 |

## 返回值

void

## 说明


 **ZOrderCmd** 参数值可以是下列 **MsoZOrderCmd** 常量之一。  
 **msoBringForward**  
 **msoBringInFrontOfText** 仅用于 WPS。  
 **msoBringToFront**  
 **msoSendBackward**  
 **msoSendBehindText** 仅用于 WPS。  
 **msoSendToBack**  
可用 **ZOrderPosition** 属性确定形状在 z-顺序中的当前位置。



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加椭圆，并将该椭圆的 z-顺序位置置于底层。*/
function test() {
    let shapes = Application.ActivePresentation.Slides.Item(1).Shapes
    let shape = shapes.AddShape(msoShapeOval, 100, 100, 100, 300)
    let shapeRange = shapes.Range(shape.Name)
    shapeRange.ZOrder(msoSendToBack)
}
```


```JavaScript
/*本示例将活动窗口上选中形状的 z-顺序位置置于顶层。*/
function test() {
    ActiveWindow.Selection.ShapeRange.ZOrder(msoBringToFront)
}
```
