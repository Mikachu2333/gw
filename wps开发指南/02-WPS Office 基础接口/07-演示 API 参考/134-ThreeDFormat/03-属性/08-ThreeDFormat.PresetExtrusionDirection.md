# ThreeDFormat.PresetExtrusionDirection

返回延伸的伸展路径偏离原形状（延伸部分的正面）的方向。只读。



## 语法

express.**PresetExtrusionDirection**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoPresetExtrusionDirection

## 说明


此属性为只读。若要设置此属性的值，请使用 **[SetExtrusionDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/SetExtrusionDirection)** 方法。

 **PresetExtrusionDirection** 属性的值可以是下列 **MsoPresetExtrusionDirection** 常量之一：

| **msoExtrusionBottom**               |
| ------------------------------------ |
| **msoExtrusionBottomLeft**           |
| **msoExtrusionBottomRight**          |
| **msoExtrusionLeft**                 |
| **msoExtrusionNone**                 |
| **msoExtrusionRight**                |
| **msoExtrusionTop**                  |
| **msoExtrusionTopLeft**              |
| **msoExtrusionTopRight**             |
| **msoPresetExtrusionDirectionMixed** |



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片中每个朝向延伸正面左上角的延伸更改为朝向正面右下角方向的延伸。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    for (let i = 1; i <= slide.Shapes.Count; i++) {
        let threeDFormat = slide.Shapes.Item(i).ThreeD
        if (threeDFormat.PresetExtrusionDirection == msoExtrusionTopLeft) {
            threeDFormat.SetExtrusionDirection(msoExtrusionBottomRight)
        }
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一张幻灯片中第一个形状延伸的伸展路径偏离原形状（延伸部分的正面）的方向是否为msoExtrusionRight。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.ThreeD.PresetExtrusionDirection == msoExtrusionRight)
}
```
