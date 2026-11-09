# Shape.ZOrder

将指定的形状移到集合中其他形状的前面或后面（即更改该形状在 z-顺序中的位置）。



## 语法

express.**ZOrder(ZOrderCmd)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ZOrderCmd | 必选 | MsoZOrderCmd | 指定针对其他形状将指定形状移动到的位置。 |

## 返回值

void

## 说明


| MsoZOrderCmd 可以是下列 MsoZOrderCmd 常量之一。 |
| ------------------------------------- |
| **msoBringForward**                   |
| **msoBringInFrontOfText** 仅用于 WPS。    |
| **msoBringToFront**                   |
| **msoSendBackward**                   |
| **msoSendBehindText** 仅用于 WPS。        |
| **msoSendToBack**                     |

msoBringInFrontOfText 和 msoSendBehindText 常量应仅在 WPS 中使用。

可用 **ZOrderPosition** 属性确定形状在 z-顺序中的当前位置。



## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片上中添加椭圆，如果幻灯片中有至少一个其他形状，则将该椭圆放置在 z-顺序中倒数第二的位置上。*/
function test() {
    let slide = Application.ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeOval, 100, 100, 100, 300)
    while (shape.ZOrderPosition > 2) {
        shape.ZOrder(msoSendBackward)
    }
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一个形状置于顶层。*/
function test() {
    let shape = Application.ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.ZOrder(msoBringToFront)
}
```
