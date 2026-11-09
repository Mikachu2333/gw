# ThreeDFormat.Perspective

确定是否以透视效果显示延伸。可读/写。



## 语法

express.**Perspective**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoTriState

## 说明


 **Perspective** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ------------ | --------------------------- |
| **msoFalse** | 延伸是平行或正射投影，即延伸部分的外壁不向消失点收敛。 |
| **msoTrue** | 以透视效果显示延伸，即延伸部分的外壁向消失点收敛。 |



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一个形状的延伸深度设置为 100 磅，并指定延伸为平行或正交。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let threeDFormat = slide.Shapes.Item(1).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.Depth = 100
    threeDFormat.Perspective = msoFalse
}
```


```JavaScript
/*本示例判断第一篇演示文稿的第一张幻灯片上第一个形状是否以透视效果显示延伸，并通知用户。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let threeDFormat = slide.Shapes.Item(1).ThreeD
    if (threeDFormat.Perspective == msoTrue) {
        alert("当前形状指定延伸以透视显示")
    } else {
        alert("当前形状指定延伸为平行或正交。")
    }
}
```
